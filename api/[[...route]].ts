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

  const res = await ofetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: {
      client_id: process.env.VITE_CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code,
    },
  })

  return c.json(res)
})

export const GET = handle(app)
