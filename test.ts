import { db } from './src/lib/Database' // sua instância do Kysely

async function testSelect() {
  const users = await db.selectFrom('user').selectAll().execute()
  console.log(users)
}

testSelect()
  .catch(console.error)
  .finally(() => process.exit())
