import { QueryClient } from '@tanstack/react-query'
import { hc } from 'hono/client'
import type { ApiRoutes } from '../../../backend'

export const queryClient = new QueryClient()

export const honoClient = hc<ApiRoutes>('http://localhost:3000')
