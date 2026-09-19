import pkg from 'libpg-query'
import { readFileSync } from 'fs'
const { parse, loadModule } = pkg
await loadModule()

const r = await parse(readFileSync(process.argv[2], 'utf8'))
let total = 0, safe = 0
for (const s of r.stmts) {
  const v = s.stmt?.ViewStmt
  if (!v) continue
  total++
  const name = v.view?.relname
  const opts = (v.options ?? []).map(o => {
    const d = o.DefElem
    return `${d.defname}=${d.arg?.Boolean?.boolval ?? d.arg?.String?.sval ?? ''}`
  })
  const ok = opts.some(o => o.startsWith('security_invoker=') && !o.endsWith('=false') && o !== 'security_invoker=')
  if (ok) safe++
  console.log(`${ok ? 'OK  ' : 'LEAK'} ${name.padEnd(28)} [${opts.join(', ') || 'no options'}]`)
}
console.log(`\n${safe}/${total} views run as caller (RLS enforced).`)
process.exit(safe === total ? 0 : 1)
