import {
  keepPreviousData,
  useIsRestoring,
  useQuery,
} from '@tanstack/react-query'
import { globalOfetch } from '@/globalOfetch'

export interface IUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: null
  blog: string
  location: null
  email: null
  hireable: null
  bio: string
  twitter_username: null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: Date
  updated_at: Date
}

function useUserQuery() {
  const isRestoring = useIsRestoring()
  const { data, isLoading, error } = useQuery<IUser>({
    queryKey: ['user'],
    queryFn: async () => {
      return await globalOfetch('user')
    },
  })

  return {
    data,
    isRestoring,
    isLoading,
    error,
  }
}
export { useUserQuery }
