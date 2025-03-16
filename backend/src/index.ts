import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { join } from 'path'
import { logger } from 'hono/logger'
import { serveStatic } from 'hono/bun'

const frontendDist = process.env.NODE_ENV === 'production' ? import.meta.dir : join(import.meta.dir, '../../dist')
console.log('frontend directory: ', frontendDist)

const app = new Hono()

app.use(logger())
app.use(cors())

const _apiRoutes = app.basePath('/api').get('/title', (c) => c.json({ title: 'Hello World' }))

app.get(
  '*',
  serveStatic({
    root: frontendDist
  })
)
app.get('*', serveStatic({ path: join(frontendDist, 'index.html') }))

export default app
export type ApiRoutes = typeof _apiRoutes
