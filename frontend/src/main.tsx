import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './utils/api'
import { RootComponent } from './Root'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <QueryClientProvider client={queryClient}>
    <RootComponent />
  </QueryClientProvider>
)
