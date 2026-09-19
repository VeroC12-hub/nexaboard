#!/usr/bin/env bash
# tools/nacca-fetch.sh
#
# Downloads the published NaCCA curriculum documents and converts each to text.
#
# The syllabus outlines in src/lib/education/library/syllabus/ were written from
# general knowledge of the subjects, which turned out to be the previous
# curriculum: the new Senior High School curriculum renamed subjects, added
# others, and reorganised every strand. This fetches the actual documents so the
# outlines can be generated from them instead.
#
#   bash tools/nacca-fetch.sh
#
# Output goes to .nacca/ (git ignored): one PDF and one .txt per subject.
# Nothing here is committed. The documents are NaCCA's, and the repository keeps
# what is derived from them rather than the documents themselves.

set -u

OUT="${NACCA_DIR:-.nacca}"
mkdir -p "$OUT"

need() {
  command -v "$1" >/dev/null 2>&1 || { echo "  $1 is not installed, stopping"; exit 1; }
}
need curl
need pdftotext

# The two index pages that list the documents.
PAGES=(
  "https://nacca.gov.gh/secondary-education-curriculum/"
  "https://nacca.gov.gh/common-core-programme-ccp/"
  "https://nacca.gov.gh/learning-areas-subjects/new-standards-based-curriculum-2019/"
)

echo "finding documents"
: > "$OUT/urls.txt"
for page in "${PAGES[@]}"; do
  curl -sL --max-time 60 "$page" \
    | grep -oE 'https://(www\.)?nacca\.gov\.gh/wp-content/uploads/[0-9]{4}/[0-9]{2}/[A-Za-z0-9._%-]+\.pdf' \
    >> "$OUT/urls.txt" 2>/dev/null
done
sort -u "$OUT/urls.txt" -o "$OUT/urls.txt"
echo "  $(wc -l < "$OUT/urls.txt") documents listed"

got=0
failed=0
while read -r url; do
  [ -z "$url" ] && continue
  name=$(basename "$url" .pdf)
  pdf="$OUT/$name.pdf"
  txt="$OUT/$name.txt"

  if [ -s "$txt" ]; then
    echo "  have $name"
    got=$((got + 1))
    continue
  fi

  code=$(curl -sL --max-time 240 -o "$pdf" -w "%{http_code}" "$url")
  if [ "$code" != "200" ] || [ ! -s "$pdf" ]; then
    echo "  FAILED $name (http $code)"
    rm -f "$pdf"
    failed=$((failed + 1))
    continue
  fi

  # -layout keeps the scope and sequence tables readable, which is where the
  # strands and sub-strands are listed.
  if pdftotext -layout "$pdf" "$txt" 2>/dev/null && [ -s "$txt" ]; then
    echo "  got $name ($(wc -c < "$pdf" | tr -d ' ') bytes, $(wc -l < "$txt" | tr -d ' ') lines)"
    got=$((got + 1))
  else
    # An image only PDF yields nothing. Said plainly rather than left as an
    # empty file that looks like a subject with no content.
    echo "  NO TEXT $name (scanned images, needs OCR)"
    rm -f "$txt"
    failed=$((failed + 1))
  fi
done < "$OUT/urls.txt"

echo
echo "$got usable, $failed not"
