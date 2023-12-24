import _ from 'lodash'
import {
  useInfiniteQuery,
  useIsRestoring,
  useQueries,
} from '@tanstack/react-query'
import { globalOfetch } from '@/globalOfetch'

const PAGE_SIZE = 100
const PAGE = 10
function useUserStarredQuery() {
  const pageList = _.range(1, PAGE + 1)
  const isRestoring = useIsRestoring()
  const { data, isLoading } = useQueries({
    queries: pageList.map((page) => {
      return {
        queryKey: ['user/starred', page],
        queryFn: async () => {
          return await globalOfetch(
            `user/starred?page=${page}&per_page=${PAGE_SIZE}`,
          )
        },
      }
    }),
    combine: (results) => {
      return {
        data: results.map((result) => {
          return result.data
        }),
        isLoading: results.some((result) => {
          return result.isLoading
        }),
      }
    },
  })
  return {
    data,
    isRestoring,
    isLoading,
  }
}
export { useUserStarredQuery }
