import pkg from 'libpg-query'
import { readFileSync } from 'fs'
const { parse, loadModule } = pkg
await loadModule()

let bad = 0
for (const f of process.argv.slice(2)) {
  const sql = readFileSync(f, 'utf8')
  const name = f.split(/[\/]/).pop()
  try {
    const r = await parse(sql)
    console.log(`OK   ${name}  (${r.stmts?.length ?? 0} statements)`)
  } catch (e) {
    bad++
    console.log(`FAIL ${name}\n     ${e.message}`)
  }
}
console.log(bad === 0 ? '\nAll files parse against the Postgres 17 grammar.' : `\n${bad} file(s) failed.`)
