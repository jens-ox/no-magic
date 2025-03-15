import { Hono } from 'hono'
import { join } from 'path'
import { serveStatic } from 'hono/bun'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'

const app = new Hono()

app.use(logger())
app.use(cors())

const apiRoutes = app.basePath('/api').get('/title', (c) => c.json({ title: 'Hello World' }))

app.get('*', serveStatic({ root: join(import.meta.dir, '../frontend/dist') }))
app.get('*', serveStatic({ path: join(import.meta.dir, '../frontend/dist/index.html') }))

export default app
export type ApiRoutes = typeof apiRoutes
