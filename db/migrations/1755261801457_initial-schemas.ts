import type { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('user')
    .ifNotExists()
    .addColumn('id', 'text', col => col.notNull().primaryKey())
    .addColumn('name', 'text', col => col.notNull())
    .addColumn('email', 'text', col => col.notNull().unique())
    .addColumn('emailVerified', 'boolean', col => col.notNull())
    .addColumn('image', 'text')
    .addColumn('createdAt', 'timestamp', col => col.notNull())
    .addColumn('updatedAt', 'timestamp', col => col.notNull())
    .execute()

  await db.schema
    .createTable('session')
    .ifNotExists()
    .addColumn('id', 'text', col => col.notNull().primaryKey())
    .addColumn('expiresAt', 'timestamp', col => col.notNull())
    .addColumn('token', 'text', col => col.notNull().unique())
    .addColumn('createdAt', 'timestamp', col => col.notNull())
    .addColumn('updatedAt', 'timestamp', col => col.notNull())
    .addColumn('ipAddress', 'text')
    .addColumn('userAgent', 'text')
    .addColumn('userId', 'text', col => col.notNull().references('user.id'))
    .execute()

  await db.schema
    .createTable('account')
    .ifNotExists()
    .addColumn('id', 'text', col => col.notNull().primaryKey())
    .addColumn('accountId', 'text', col => col.notNull())
    .addColumn('providerId', 'text', col => col.notNull())
    .addColumn('userId', 'text', col => col.notNull().references('user.id'))
    .addColumn('accessToken', 'text')
    .addColumn('refreshToken', 'text')
    .addColumn('idToken', 'text')
    .addColumn('accessTokenExpiresAt', 'timestamp')
    .addColumn('refreshTokenExpiresAt', 'timestamp')
    .addColumn('scope', 'text')
    .addColumn('password', 'text')
    .addColumn('createdAt', 'timestamp', col => col.notNull())
    .addColumn('updatedAt', 'timestamp', col => col.notNull())
    .execute()

  await db.schema
    .createTable('verification')
    .ifNotExists()
    .addColumn('id', 'text', col => col.notNull().primaryKey())
    .addColumn('identifier', 'text', col => col.notNull())
    .addColumn('value', 'text', col => col.notNull())
    .addColumn('expiresAt', 'timestamp', col => col.notNull())
    .addColumn('createdAt', 'timestamp')
    .addColumn('updatedAt', 'timestamp')
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('verification').ifExists().execute()
  await db.schema.dropTable('account').ifExists().execute()
  await db.schema.dropTable('session').ifExists().execute()
  await db.schema.dropTable('user').ifExists().execute()
}
