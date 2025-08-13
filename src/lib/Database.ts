import { Database } from '@/types/types' // esta é a interface do banco de dados que definimos anteriormente
import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'

const dialect = new PostgresDialect({
    pool: new Pool({
        database: 'loja',
        host: 'localhost',
        user: 'postgres',
        port: 5432,  // altere aqui para a porta correta
        max: 10,
        password: '81510156' // lembre de colocar a senha correta
      }),
})

export const db = new Kysely<Database>({
    dialect,
})