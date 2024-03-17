/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './../routes/__root'
import { Route as Import } from './../routes/*'
import { Route as PostsPostIdImport } from './../routes/posts/$postId'

// Create Virtual Routes

const SignInLazyImport = createFileRoute('/sign-in')()
const DashboardLazyImport = createFileRoute('/dashboard')()
const IndexLazyImport = createFileRoute('/')()
const TodosIndexLazyImport = createFileRoute('/todos/')()
const PostsIndexLazyImport = createFileRoute('/posts/')()
const AboutIndexLazyImport = createFileRoute('/about/')()
const TodosTodoIdLazyImport = createFileRoute('/todos/$todoId')()

// Create/Update Routes

const SignInLazyRoute = SignInLazyImport.update({
  path: '/sign-in',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./../routes/sign-in.lazy').then((d) => d.Route))

const DashboardLazyRoute = DashboardLazyImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./../routes/dashboard.lazy').then((d) => d.Route))

const Route = Import.update({
  path: '/*',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./../routes/index.lazy').then((d) => d.Route))

const TodosIndexLazyRoute = TodosIndexLazyImport.update({
  path: '/todos/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./../routes/todos/index.lazy').then((d) => d.Route),
)

const PostsIndexLazyRoute = PostsIndexLazyImport.update({
  path: '/posts/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./../routes/posts/index.lazy').then((d) => d.Route),
)

const AboutIndexLazyRoute = AboutIndexLazyImport.update({
  path: '/about/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./../routes/about/index.lazy').then((d) => d.Route),
)

const TodosTodoIdLazyRoute = TodosTodoIdLazyImport.update({
  path: '/todos/$todoId',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./../routes/todos/$todoId.lazy').then((d) => d.Route),
)

const PostsPostIdRoute = PostsPostIdImport.update({
  path: '/posts/$postId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/*': {
      preLoaderRoute: typeof Import
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      preLoaderRoute: typeof DashboardLazyImport
      parentRoute: typeof rootRoute
    }
    '/sign-in': {
      preLoaderRoute: typeof SignInLazyImport
      parentRoute: typeof rootRoute
    }
    '/posts/$postId': {
      preLoaderRoute: typeof PostsPostIdImport
      parentRoute: typeof rootRoute
    }
    '/todos/$todoId': {
      preLoaderRoute: typeof TodosTodoIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/about/': {
      preLoaderRoute: typeof AboutIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/posts/': {
      preLoaderRoute: typeof PostsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/todos/': {
      preLoaderRoute: typeof TodosIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  Route,
  DashboardLazyRoute,
  SignInLazyRoute,
  PostsPostIdRoute,
  TodosTodoIdLazyRoute,
  AboutIndexLazyRoute,
  PostsIndexLazyRoute,
  TodosIndexLazyRoute,
])

/* prettier-ignore-end */