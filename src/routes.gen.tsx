// Generouted, changes to this file will be overriden
import { Fragment } from 'react'
import {
  lazyRouteComponent,
  Outlet,
  Router,
  RootRoute,
  Route,
  RouterProvider,
} from '@tanstack/react-router'

import App from './pages/_app'

const root = new RootRoute({ component: App || Outlet })
const _404 = new Route({
  getParentRoute: () => {
    return root
  },
  path: '*',
  component: Fragment,
})
const login = new Route({
  getParentRoute: () => {
    return root
  },
  path: 'login',
})
const loginindex = new Route({
  getParentRoute: () => {
    return login
  },
  path: '/',
  component: lazyRouteComponent(() => {
    return import('./pages/login/index')
  }),
})
const callback = new Route({
  getParentRoute: () => {
    return root
  },
  path: 'callback',
})
const callbackindex = new Route({
  getParentRoute: () => {
    return callback
  },
  path: '/',
  component: lazyRouteComponent(() => {
    return import('./pages/callback/index')
  }),
})
const about = new Route({
  getParentRoute: () => {
    return root
  },
  path: 'about',
  component: lazyRouteComponent(() => {
    return import('./pages/about')
  }),
})
const index = new Route({
  getParentRoute: () => {
    return root
  },
  path: '/',
  component: lazyRouteComponent(() => {
    return import('./pages/index')
  }),
})

const config = root.addChildren([
  login.addChildren([loginindex]),
  callback.addChildren([callbackindex]),
  about,
  index,
  _404,
])

const router = new Router({ routeTree: config })
export const Routes = () => {
  return <RouterProvider router={router} />
}

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
