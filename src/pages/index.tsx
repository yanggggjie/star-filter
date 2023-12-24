import _, { divide } from 'lodash'
import { clsx } from 'clsx'
import { globalOfetch } from '@/globalOfetch'
import { useUserQuery } from '@/useApi/useUserQuery'
import { useIsRestoring } from '@tanstack/react-query'
import StarList from '@/components/StarList'
import User from '@/components/User'
interface Props {}

export default function Index({}: Props) {
  return (
    <div>
      <StarList></StarList>
      <User></User>
    </div>
  )
}
