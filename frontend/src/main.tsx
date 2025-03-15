import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <div>
    <h1>Fullstack Starter</h1>
  </div>
)
