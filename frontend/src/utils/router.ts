import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { IndexRoute } from '../routes'
import { RootComponent } from '../Root'

const rootRoute = createRootRoute({
  component: RootComponent
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexRoute
})

const routeTree = rootRoute.addChildren([indexRoute])

export const router = createRouter({ routeTree })
