import type { Kysely } from 'kysely'

// `any` is required here since migrations should be frozen in time. alternatively, keep a "snapshot" db interface.
export async function up(db: Kysely<any>): Promise<void> {
	await db.schema
    .createTable('loja')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('nome', 'varchar(255)', (col) => col.notNull())
    .addColumn('endereco', 'varchar(255)')
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
	await db.schema.dropTable('loja').execute()
  }