import type { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  const res = await axios.get(
    'https://jsonplaceholder.typicode.com/todos/1',
    {},
  )

  console.log('res', res)

  return response.status(200).json({ data: res.data })
}
