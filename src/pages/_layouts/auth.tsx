import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="h-full border-r border-foreground"></div>
      <h1>Autenticação</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
