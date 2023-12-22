import { Link, Outlet } from '@tanstack/react-router'

export default function App() {
  return (
    <section style={{ margin: 24 }}>
      <header style={{ display: 'flex', gap: 24 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to={'/login'}> login </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </section>
  )
}
