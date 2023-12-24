import _ from 'lodash'
import { clsx } from 'clsx'
import { Link, useNavigate } from 'react-router-dom'
import { useToken } from '@/store/useToken'
import { useEffect } from 'react'
interface Props {}

export default function Index({}: Props) {
  const { token } = useToken()
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <div>
      <div>in login</div>
      <Link
        to={`https://github.com/login/oauth/authorize?client_id=${
          import.meta.env.VITE_CLIENT_ID
        }`}
      >
        github login
      </Link>
    </div>
  )
}
