import { Hono } from 'hono'
import { handle } from '@hono/node-server/vercel'
import axios from 'axios'

const app = new Hono().basePath('/api')

app.get('/hello', async (c) => {
  const res = axios.get('')
  console.log('', res)

  return c.json({
    message: 'Hello from Hono!',
  })
})

export default handle(app)
