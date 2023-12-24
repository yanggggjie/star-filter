import { ofetch } from 'ofetch'
import { useToken } from '@/store/useToken'
const controller = new AbortController()

const globalOfetch = ofetch.create({
  signal: controller.signal,
  method: 'GET',
  baseURL: 'https://api.github.com/',
  headers: {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'Content-Type': 'application/json',
  },
  onRequest: async ({ options, response, error }) => {
    const token = useToken.getState().token
    if (!token) {
      controller.abort()
      window.location.href = '/login'
    }

    options.headers = {
      ...options.headers,
      Authorization: `bearer ${token}`,
    }
  },
  onResponse: async ({ response, options }) => {
    if (response.status === 401) {
      window.location.href = '/login'
    }
  },
})

export { globalOfetch }
