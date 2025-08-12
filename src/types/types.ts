import { ColumnType, Generated, Insertable, Selectable, Updateable } from 'kysely'

// ----------------Definição da Tabela----------------------------------------------


export interface Database {
    users: UserTable
    product: ProductTable
}

// ----------------Tabelas de Usuarios----------------------------------------------


export interface UserTable {
    id: Generated<number>
    created_at: ColumnType<Date, string | undefined | never> // ColumnType<OutputType, InsertType, UpdateType>
    name: string
    email: string
    password: string
}

// Exportação de métodos
export type Users = Selectable<UserTable>
export type NewUser = Insertable<UserTable>
export type UpdateUser = Updateable<UserTable>

// ----------------Tabelas de Produtos----------------------------------------------



export interface ProductTable {
    id: Generated<number>
    createdAt: ColumnType<Date, string | undefined | never>
    name: string
    price: number
}

// Exportação de métodos
export type Product = Selectable<ProductTable>
export type addProduct = Insertable<ProductTable>
export type updateProduct = Updateable<ProductTable>