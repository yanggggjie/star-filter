import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { ofetch } from 'ofetch'
import * as process from 'process'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello Next.js!',
  })
})
app.get('/exchange-token', async (c) => {
  const code = c.req.query('code')

  console.log('env', process.env)

  const res = await ofetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: {
      client_id: process.env.VITE_CLIENT_ID,
      client_secret: 'a6d0f1b5b4f1e0c9e4d5f6a7a8c9d0e1f2a3b4c5',
      code,
    },
  })

  console.log('code', code)

  return c.json({
    token: 123,
  })
})

export const GET = handle(app)
