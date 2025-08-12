// migrations/001_create_users_products.ts
import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  // Tabela de usuários
  await db.schema
    .createTable('user')
    .addColumn('id', 'serial', col => col.primaryKey())
    .addColumn('created_at', 'timestamp', col => col.defaultTo(sql`now()`).notNull())
    .addColumn('name', 'varchar(255)', col => col.notNull())
    .addColumn('email', 'varchar(255)', col => col.notNull().unique())
    .addColumn('password', 'varchar(255)', col => col.notNull())
    .execute()

  // Tabela de produtos
  await db.schema
    .createTable('product')
    .addColumn('id', 'serial', col => col.primaryKey())
    .addColumn('created_at', 'timestamp', col => col.defaultTo(sql`now()`).notNull())
    .addColumn('name', 'varchar(255)', col => col.notNull())
    .addColumn('price', 'numeric(10, 2)', col => col.notNull())
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('product').execute()
  await db.schema.dropTable('user').execute()
}
