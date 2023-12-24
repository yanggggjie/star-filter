import _ from 'lodash'
import { clsx } from 'clsx'
import { useUserQuery } from '@/useApi/useUserQuery'
interface Props {}

export default function User({}: Props) {
  const { data, isRestoring, isLoading, error } = useUserQuery()
  if (isRestoring) return <div>restoring</div>
  if (isLoading) return <div>loading</div>
  console.log('user data', data)
  return <div></div>
}
