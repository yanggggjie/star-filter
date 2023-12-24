import _ from 'lodash'
import { clsx } from 'clsx'
import { useUserQuery } from '@/useApi/useUserQuery'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'
import { Cake, Github, MapPin } from 'lucide-react'
interface Props {}

export default function User({}: Props) {
  const { data, isRestoring, isLoading, error } = useUserQuery()
  if (isRestoring) return <div>restoring</div>
  console.log('user data', data)
  if (isLoading) return <div>loading</div>
  if (!data) return <div></div>
  const createAt = new Date(data.created_at)
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger>
          <Avatar className={clsx('inline-block')}>
            <AvatarImage src={data.avatar_url} />
            <AvatarFallback>{data.login}</AvatarFallback>
          </Avatar>
        </HoverCardTrigger>
        <HoverCardContent className={clsx('flex flex-col items-start gap-2')}>
          <p className={clsx('font-bold text-xl')}>{data.login}</p>
          <p>{data.bio}</p>
          <p
            className={clsx('-ml-1', 'inline-flex flex-row items-center gap-3')}
          >
            <span>
              <Github className={'inline-block h-5'}></Github>
            </span>
            <p className={'flex flex-row items-center gap-0.5'}>
              {createAt.getFullYear()}/{createAt.getDay()}/
              {createAt.getMonth() + 1}
              <Cake className={'inline-block h-5'}></Cake>
            </p>
          </p>
          <p className={clsx('-ml-1', ' flex flex-row items-center gap-3')}>
            <MapPin></MapPin>
            {data.location || 'Earth'}
          </p>
          <Button variant="outline" className={'font-bold'}>
            View Profile on Github
          </Button>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
