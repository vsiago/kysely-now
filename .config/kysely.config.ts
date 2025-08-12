import { defineConfig } from 'kysely-ctl'
import { db } from '../src/lib/Database'

export default defineConfig({
	kysely: db,
	migrations: {
		migrationFolder: 'db/migrations'
	},
	seeds: {
		seedFolder: 'seeds'
	},
})