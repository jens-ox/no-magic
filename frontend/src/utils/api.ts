import type { ApiRoutes } from 'backend/src'
import { QueryClient } from '@tanstack/react-query'
import { hc } from 'hono/client'

export const queryClient = new QueryClient()

export const honoClient = hc<ApiRoutes>(
  process.env.NODE_ENV === 'production' ? window.location.origin : 'http://localhost:3000'
)
