import { Hono } from 'hono'
import { join } from 'path'
import { serveStatic } from 'hono/bun'
const app = new Hono()

console.log(import.meta.dir)

app.get('*', serveStatic({ root: join(import.meta.dir, '../frontend/dist') }))
app.get('*', serveStatic({ path: join(import.meta.dir, '../frontend/dist/index.html') }))

export default app
