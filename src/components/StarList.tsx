import _ from 'lodash'
import { clsx } from 'clsx'
import { useUserStarredQuery } from '@/useApi/useUserStarredQuery'
interface Props {}

export default function StarList({}: Props) {
  const { data, isRestoring, isLoading } = useUserStarredQuery()
  if (isRestoring) return <div>restoring</div>
  if (isLoading) return <div>loading</div>
  console.log('starList data', data)
  return <div></div>
}
