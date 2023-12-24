import { Link, Outlet } from 'react-router-dom'
import { clsx } from 'clsx'
import { useToken } from '@/store/useToken'

export default function App() {
  const { token, setToken } = useToken()

  return (
    <section>
      <header className={clsx('flex flex-row gap-10')}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to={'/login'}> login </Link>
        <button
          onClick={() => {
            setToken('')
          }}
        >
          logout
        </button>
      </header>
      <main>
        <Outlet />
      </main>
    </section>
  )
}
