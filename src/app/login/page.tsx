// app/page.tsx
import { db } from '@/lib/Database'  // ajuste o caminho conforme seu projeto
import type { Users } from '@/types/types' // se tiver a interface User

export default async function Page() {
  // Busca todos os usuários direto no server
  const users = await db
  .selectFrom('users')
  .select(['id', 'name', 'email'])
  .execute()

  return (
    <main>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </main>
  )
}
