"""
Put paragraph breaks into the SHS lessons that have none.

── What this is for ────────────────────────────────────────────────────────

Two hundred senior high lessons carry one `mechanism` field, titled "Why it
works" on the page, that runs to four hundred words and more in a single block
with no blank line anywhere in it. `blocksOf` already splits prose on a blank
line and the lesson page renders one paragraph per block, so those lessons are
not badly written: nobody ever pressed Enter.

Doing two hundred by hand is a week of work and would introduce typos. This
does the mechanical part and refuses to change a single word.

── How it decides where to break ───────────────────────────────────────────

Never mid-sentence. It walks the sentences and starts a new paragraph when the
current one has run long enough, preferring a sentence that opens a new thought.
The writers used a small set of openers to turn the corner, and those are the
joints a human would pick too:

    Take the long jump.  Now the honest part.  So every rule ...
    The shot put teaches the same lesson.  Three further rules ...

So the rule is: once a paragraph is past the soft limit, break before the next
sentence that starts with one of those; and break regardless once past the hard
limit, because a reader will not wait for a tidy joint at three hundred words.

── The safety check ────────────────────────────────────────────────────────

Every rewritten field is compared against the original with all whitespace
collapsed. If a single character of prose differs, nothing is written. The
only permitted change is where the blank lines fall.

Run:  python scripts/break-walls.py --check    (report only, writes nothing)
      python scripts/break-walls.py            (apply)
"""

import io
import os
import re
import sys

LESSONS = os.path.join('src', 'lib', 'education', 'library', 'lessons')

# Only the stage that needs it. The others were swept long ago and breaking
# them again would churn files for nothing.
SHS_PREFIXES = ('shs',)

# Past this, start looking for a joint.
SOFT = 90
# Past this, break at the next sentence end whatever it looks like.
HARD = 170
# Fields shorter than this were never the problem.
ONLY_OVER = 260

BACKSLASH = chr(92)
ESCAPED_NEWLINE = BACKSLASH + 'n'

# Sentences that turn a corner. A new paragraph wants to start on one of these.
OPENERS = re.compile(
    r'^(Take |Now |So |And so |That is why |The .{0,40} (teaches|is the|shows)'
    r'|Three |Two |Four |What |Here |Then |But |However |Finally '
    r'|Notice |Consider |Compare |In practice|For example|The second|The third'
    r'|The first|The same|This is|There is|There are|Once |When |Where |Why )'
)


def fragments_of(lines, start):
    """The string-literal lines of a field beginning at `start`.

    Returns (pieces, end) where `pieces` are the raw literal bodies in order
    and `end` is the first line that is not part of the field. Returns None
    when the field is not a plain concatenation of single-quoted strings,
    which is the only shape this tool is willing to touch.
    """
    pieces = []
    i = start
    while i < len(lines):
        line = lines[i].strip()
        if i > start and not line.startswith('+'):
            break
        body = line[1:].strip() if line.startswith('+') else line
        trailing_comma = body.endswith(',')
        if trailing_comma:
            body = body[:-1].rstrip()
        if not (body.startswith("'") and body.endswith("'")) or len(body) < 2:
            return None
        inner = body[1:-1]
        # An apostrophe or a quote inside would need escaping the tool does
        # not model, so refuse rather than guess.
        if "'" in inner.replace(BACKSLASH + "'", ''):
            return None
        pieces.append(inner)
        i += 1
        if trailing_comma:
            break
    return (pieces, i) if pieces else None


def sentences_of(text):
    """Split on sentence ends, keeping the punctuation with the sentence."""
    out = []
    buf = ''
    for part in re.split(r'(?<=[.!?])\s+', text):
        part = part.strip()
        if not part:
            continue
        # A fragment with no verb-ish length is usually an abbreviation that
        # the split cut badly, so glue it to the one before.
        if buf and len(part) < 3:
            buf += ' ' + part
            continue
        if buf:
            out.append(buf)
        buf = part
    if buf:
        out.append(buf)
    return out


def paragraphs_of(text):
    """Group sentences into paragraphs. Returns a list of strings."""
    paras = []
    current = []
    words = 0
    for s in sentences_of(text):
        n = len(s.split())
        starts_fresh = bool(OPENERS.match(s))
        if current and (words >= HARD or (words >= SOFT and starts_fresh)):
            paras.append(' '.join(current))
            current = []
            words = 0
        current.append(s)
        words += n
    if current:
        paras.append(' '.join(current))
    return paras


def emit(paras, indent):
    """The field, back as TypeScript, wrapped near seventy columns."""
    lines = []
    for p_index, para in enumerate(paras):
        last_para = p_index == len(paras) - 1
        words = para.split()
        buf = ''
        chunks = []
        for w in words:
            if buf and len(buf) + 1 + len(w) > 62:
                chunks.append(buf)
                buf = w
            else:
                buf = w if not buf else buf + ' ' + w
        if buf:
            chunks.append(buf)
        for c_index, chunk in enumerate(chunks):
            last_chunk = c_index == len(chunks) - 1
            tail = '' if last_chunk else ' '
            if last_chunk and not last_para:
                tail = ESCAPED_NEWLINE + ESCAPED_NEWLINE
            lines.append(indent + "+ '" + chunk + tail + "'")
    # The first line of a field is not a continuation.
    lines[0] = lines[0].replace('+ ', '', 1)
    lines[-1] = lines[-1] + ','
    return lines


def flat(s):
    """Prose with every run of whitespace collapsed, for comparison."""
    return re.sub(r'\s+', ' ', s.replace(ESCAPED_NEWLINE, ' ')).strip()


def main():
    check_only = '--check' in sys.argv
    touched = 0
    fields = 0
    refused = []

    for name in sorted(os.listdir(LESSONS)):
        if not name.endswith('.ts'):
            continue
        if not name.startswith(SHS_PREFIXES):
            continue
        path = os.path.join(LESSONS, name)
        raw = io.open(path, encoding='utf-8', newline='').read()
        nl = '\r\n' if '\r\n' in raw else '\n'
        lines = raw.replace('\r\n', '\n').split('\n')

        out = []
        i = 0
        changed = False
        while i < len(lines):
            m = re.match(r'^(\s*)mechanism:\s*$', lines[i])
            if not m:
                out.append(lines[i])
                i += 1
                continue

            indent = m.group(1) + '  '
            got = fragments_of(lines, i + 1)
            if not got:
                refused.append(name + ' (shape not understood)')
                out.append(lines[i])
                i += 1
                continue

            pieces, end = got
            text = ''.join(pieces)

            if ESCAPED_NEWLINE in text or len(text.split()) < ONLY_OVER:
                out.extend(lines[i:end])
                i = end
                continue

            paras = paragraphs_of(text)
            if len(paras) < 2:
                out.extend(lines[i:end])
                i = end
                continue

            rebuilt = emit(paras, indent)
            check = ''.join(
                re.sub(r"^\s*\+?\s*'|',?$", '', line) for line in rebuilt)
            if flat(check) != flat(text):
                refused.append(name + ' (prose would have changed)')
                out.extend(lines[i:end])
                i = end
                continue

            out.append(lines[i])
            out.extend(rebuilt)
            i = end
            fields += 1
            changed = True

        if changed:
            touched += 1
            if not check_only:
                io.open(path, 'w', encoding='utf-8', newline='').write(
                    nl.join(out))

    print(('WOULD CHANGE ' if check_only else 'CHANGED ')
          + str(fields) + ' fields in ' + str(touched) + ' files')
    for r in sorted(set(refused)):
        print('  refused:', r)


main()
