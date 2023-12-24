import _ from 'lodash'
import { clsx } from 'clsx'
import { IStar, useUserStarredQuery } from '@/useApi/useUserStarredQuery'
import { Shell } from 'lucide-react'
import { useIsRestoring } from '@tanstack/react-query'
import StarCard from '@/components/StarList/StarCard'
interface Props {
  searchText: string
}

export default function StarList({ searchText }: Props) {
  const { results, isRestoring } = useUserStarredQuery()
  if (isRestoring) return <div>restoring</div>
  const isFetching = results.some((item) => {
    return item.isFetching
  })
  const data = _.flattenDeep(
    results.map((item) => {
      return item.data
    }),
  ) as IStar[]

  return (
    <div>
      {isFetching && <Shell className={clsx('animate-spin')}></Shell>}
      {data.map((item) => {
        return (
          <StarCard
            key={item.id}
            avatarUrl={item.owner.avatar_url}
            name={item.name}
            description={item.description}
          ></StarCard>
        )
      })}
    </div>
  )
}
