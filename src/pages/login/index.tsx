import _ from 'lodash'
import { clsx } from 'clsx'
import { Link } from '@tanstack/react-router'
interface Props {}

export default function Index({}: Props) {
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
