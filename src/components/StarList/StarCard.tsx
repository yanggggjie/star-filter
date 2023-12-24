import _ from 'lodash'
import { clsx } from 'clsx'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
interface Props {
  name: string
  avatarUrl: string
  description: string
}

export default function StarCard({ name, avatarUrl, description }: Props) {
  return (
    <Card>
      <CardHeader>
        <Avatar>
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {/*<CardContent>*/}
      {/*  <p>Card Content</p>*/}
      {/*</CardContent>*/}
      {/*<CardFooter>*/}
      {/*  <p>Card Footer</p>*/}
      {/*</CardFooter>*/}
    </Card>
  )
}
