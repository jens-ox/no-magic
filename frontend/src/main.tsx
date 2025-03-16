import './index.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { RootComponent } from './Root'
import { createRoot } from 'react-dom/client'
import { queryClient } from './utils/api'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <QueryClientProvider client={queryClient}>
    <RootComponent />
  </QueryClientProvider>
)
