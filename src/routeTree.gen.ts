/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LogoutImport } from './routes/logout'
import { Route as LoginImport } from './routes/login'
import { Route as CustomersRouteImport } from './routes/customers/route'
import { Route as IndexImport } from './routes/index'
import { Route as CustomersUsersRouteImport } from './routes/customers/users/route'
import { Route as CustomersGuarantorsRouteImport } from './routes/customers/guarantors/route'
import { Route as CustomersUsersIndexImport } from './routes/customers/users/index'
import { Route as CustomersGuarantorsIndexImport } from './routes/customers/guarantors/index'
import { Route as CustomersUsersUserIdRouteImport } from './routes/customers/users/$userId/route'
import { Route as CustomersUsersUserIdSavingsImport } from './routes/customers/users/$userId/savings'
import { Route as CustomersUsersUserIdLoansImport } from './routes/customers/users/$userId/loans'
import { Route as CustomersUsersUserIdDocumentsImport } from './routes/customers/users/$userId/documents'
import { Route as CustomersUsersUserIdDetailsImport } from './routes/customers/users/$userId/details'
import { Route as CustomersUsersUserIdBankDetailsImport } from './routes/customers/users/$userId/bank-details'
import { Route as CustomersUsersUserIdAppAndSystemImport } from './routes/customers/users/$userId/app-and-system'

// Create/Update Routes

const LogoutRoute = LogoutImport.update({
  id: '/logout',
  path: '/logout',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const CustomersRouteRoute = CustomersRouteImport.update({
  id: '/customers',
  path: '/customers',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const CustomersUsersRouteRoute = CustomersUsersRouteImport.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => CustomersRouteRoute,
} as any)

const CustomersGuarantorsRouteRoute = CustomersGuarantorsRouteImport.update({
  id: '/guarantors',
  path: '/guarantors',
  getParentRoute: () => CustomersRouteRoute,
} as any)

const CustomersUsersIndexRoute = CustomersUsersIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => CustomersUsersRouteRoute,
} as any)

const CustomersGuarantorsIndexRoute = CustomersGuarantorsIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => CustomersGuarantorsRouteRoute,
} as any)

const CustomersUsersUserIdRouteRoute = CustomersUsersUserIdRouteImport.update({
  id: '/$userId',
  path: '/$userId',
  getParentRoute: () => CustomersUsersRouteRoute,
} as any)

const CustomersUsersUserIdSavingsRoute =
  CustomersUsersUserIdSavingsImport.update({
    id: '/savings',
    path: '/savings',
    getParentRoute: () => CustomersUsersUserIdRouteRoute,
  } as any)

const CustomersUsersUserIdLoansRoute = CustomersUsersUserIdLoansImport.update({
  id: '/loans',
  path: '/loans',
  getParentRoute: () => CustomersUsersUserIdRouteRoute,
} as any)

const CustomersUsersUserIdDocumentsRoute =
  CustomersUsersUserIdDocumentsImport.update({
    id: '/documents',
    path: '/documents',
    getParentRoute: () => CustomersUsersUserIdRouteRoute,
  } as any)

const CustomersUsersUserIdDetailsRoute =
  CustomersUsersUserIdDetailsImport.update({
    id: '/details',
    path: '/details',
    getParentRoute: () => CustomersUsersUserIdRouteRoute,
  } as any)

const CustomersUsersUserIdBankDetailsRoute =
  CustomersUsersUserIdBankDetailsImport.update({
    id: '/bank-details',
    path: '/bank-details',
    getParentRoute: () => CustomersUsersUserIdRouteRoute,
  } as any)

const CustomersUsersUserIdAppAndSystemRoute =
  CustomersUsersUserIdAppAndSystemImport.update({
    id: '/app-and-system',
    path: '/app-and-system',
    getParentRoute: () => CustomersUsersUserIdRouteRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/customers': {
      id: '/customers'
      path: '/customers'
      fullPath: '/customers'
      preLoaderRoute: typeof CustomersRouteImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/logout': {
      id: '/logout'
      path: '/logout'
      fullPath: '/logout'
      preLoaderRoute: typeof LogoutImport
      parentRoute: typeof rootRoute
    }
    '/customers/guarantors': {
      id: '/customers/guarantors'
      path: '/guarantors'
      fullPath: '/customers/guarantors'
      preLoaderRoute: typeof CustomersGuarantorsRouteImport
      parentRoute: typeof CustomersRouteImport
    }
    '/customers/users': {
      id: '/customers/users'
      path: '/users'
      fullPath: '/customers/users'
      preLoaderRoute: typeof CustomersUsersRouteImport
      parentRoute: typeof CustomersRouteImport
    }
    '/customers/users/$userId': {
      id: '/customers/users/$userId'
      path: '/$userId'
      fullPath: '/customers/users/$userId'
      preLoaderRoute: typeof CustomersUsersUserIdRouteImport
      parentRoute: typeof CustomersUsersRouteImport
    }
    '/customers/guarantors/': {
      id: '/customers/guarantors/'
      path: '/'
      fullPath: '/customers/guarantors/'
      preLoaderRoute: typeof CustomersGuarantorsIndexImport
      parentRoute: typeof CustomersGuarantorsRouteImport
    }
    '/customers/users/': {
      id: '/customers/users/'
      path: '/'
      fullPath: '/customers/users/'
      preLoaderRoute: typeof CustomersUsersIndexImport
      parentRoute: typeof CustomersUsersRouteImport
    }
    '/customers/users/$userId/app-and-system': {
      id: '/customers/users/$userId/app-and-system'
      path: '/app-and-system'
      fullPath: '/customers/users/$userId/app-and-system'
      preLoaderRoute: typeof CustomersUsersUserIdAppAndSystemImport
      parentRoute: typeof CustomersUsersUserIdRouteImport
    }
    '/customers/users/$userId/bank-details': {
      id: '/customers/users/$userId/bank-details'
      path: '/bank-details'
      fullPath: '/customers/users/$userId/bank-details'
      preLoaderRoute: typeof CustomersUsersUserIdBankDetailsImport
      parentRoute: typeof CustomersUsersUserIdRouteImport
    }
    '/customers/users/$userId/details': {
      id: '/customers/users/$userId/details'
      path: '/details'
      fullPath: '/customers/users/$userId/details'
      preLoaderRoute: typeof CustomersUsersUserIdDetailsImport
      parentRoute: typeof CustomersUsersUserIdRouteImport
    }
    '/customers/users/$userId/documents': {
      id: '/customers/users/$userId/documents'
      path: '/documents'
      fullPath: '/customers/users/$userId/documents'
      preLoaderRoute: typeof CustomersUsersUserIdDocumentsImport
      parentRoute: typeof CustomersUsersUserIdRouteImport
    }
    '/customers/users/$userId/loans': {
      id: '/customers/users/$userId/loans'
      path: '/loans'
      fullPath: '/customers/users/$userId/loans'
      preLoaderRoute: typeof CustomersUsersUserIdLoansImport
      parentRoute: typeof CustomersUsersUserIdRouteImport
    }
    '/customers/users/$userId/savings': {
      id: '/customers/users/$userId/savings'
      path: '/savings'
      fullPath: '/customers/users/$userId/savings'
      preLoaderRoute: typeof CustomersUsersUserIdSavingsImport
      parentRoute: typeof CustomersUsersUserIdRouteImport
    }
  }
}

// Create and export the route tree

interface CustomersGuarantorsRouteRouteChildren {
  CustomersGuarantorsIndexRoute: typeof CustomersGuarantorsIndexRoute
}

const CustomersGuarantorsRouteRouteChildren: CustomersGuarantorsRouteRouteChildren =
  {
    CustomersGuarantorsIndexRoute: CustomersGuarantorsIndexRoute,
  }

const CustomersGuarantorsRouteRouteWithChildren =
  CustomersGuarantorsRouteRoute._addFileChildren(
    CustomersGuarantorsRouteRouteChildren,
  )

interface CustomersUsersUserIdRouteRouteChildren {
  CustomersUsersUserIdAppAndSystemRoute: typeof CustomersUsersUserIdAppAndSystemRoute
  CustomersUsersUserIdBankDetailsRoute: typeof CustomersUsersUserIdBankDetailsRoute
  CustomersUsersUserIdDetailsRoute: typeof CustomersUsersUserIdDetailsRoute
  CustomersUsersUserIdDocumentsRoute: typeof CustomersUsersUserIdDocumentsRoute
  CustomersUsersUserIdLoansRoute: typeof CustomersUsersUserIdLoansRoute
  CustomersUsersUserIdSavingsRoute: typeof CustomersUsersUserIdSavingsRoute
}

const CustomersUsersUserIdRouteRouteChildren: CustomersUsersUserIdRouteRouteChildren =
  {
    CustomersUsersUserIdAppAndSystemRoute:
      CustomersUsersUserIdAppAndSystemRoute,
    CustomersUsersUserIdBankDetailsRoute: CustomersUsersUserIdBankDetailsRoute,
    CustomersUsersUserIdDetailsRoute: CustomersUsersUserIdDetailsRoute,
    CustomersUsersUserIdDocumentsRoute: CustomersUsersUserIdDocumentsRoute,
    CustomersUsersUserIdLoansRoute: CustomersUsersUserIdLoansRoute,
    CustomersUsersUserIdSavingsRoute: CustomersUsersUserIdSavingsRoute,
  }

const CustomersUsersUserIdRouteRouteWithChildren =
  CustomersUsersUserIdRouteRoute._addFileChildren(
    CustomersUsersUserIdRouteRouteChildren,
  )

interface CustomersUsersRouteRouteChildren {
  CustomersUsersUserIdRouteRoute: typeof CustomersUsersUserIdRouteRouteWithChildren
  CustomersUsersIndexRoute: typeof CustomersUsersIndexRoute
}

const CustomersUsersRouteRouteChildren: CustomersUsersRouteRouteChildren = {
  CustomersUsersUserIdRouteRoute: CustomersUsersUserIdRouteRouteWithChildren,
  CustomersUsersIndexRoute: CustomersUsersIndexRoute,
}

const CustomersUsersRouteRouteWithChildren =
  CustomersUsersRouteRoute._addFileChildren(CustomersUsersRouteRouteChildren)

interface CustomersRouteRouteChildren {
  CustomersGuarantorsRouteRoute: typeof CustomersGuarantorsRouteRouteWithChildren
  CustomersUsersRouteRoute: typeof CustomersUsersRouteRouteWithChildren
}

const CustomersRouteRouteChildren: CustomersRouteRouteChildren = {
  CustomersGuarantorsRouteRoute: CustomersGuarantorsRouteRouteWithChildren,
  CustomersUsersRouteRoute: CustomersUsersRouteRouteWithChildren,
}

const CustomersRouteRouteWithChildren = CustomersRouteRoute._addFileChildren(
  CustomersRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/customers': typeof CustomersRouteRouteWithChildren
  '/login': typeof LoginRoute
  '/logout': typeof LogoutRoute
  '/customers/guarantors': typeof CustomersGuarantorsRouteRouteWithChildren
  '/customers/users': typeof CustomersUsersRouteRouteWithChildren
  '/customers/users/$userId': typeof CustomersUsersUserIdRouteRouteWithChildren
  '/customers/guarantors/': typeof CustomersGuarantorsIndexRoute
  '/customers/users/': typeof CustomersUsersIndexRoute
  '/customers/users/$userId/app-and-system': typeof CustomersUsersUserIdAppAndSystemRoute
  '/customers/users/$userId/bank-details': typeof CustomersUsersUserIdBankDetailsRoute
  '/customers/users/$userId/details': typeof CustomersUsersUserIdDetailsRoute
  '/customers/users/$userId/documents': typeof CustomersUsersUserIdDocumentsRoute
  '/customers/users/$userId/loans': typeof CustomersUsersUserIdLoansRoute
  '/customers/users/$userId/savings': typeof CustomersUsersUserIdSavingsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/customers': typeof CustomersRouteRouteWithChildren
  '/login': typeof LoginRoute
  '/logout': typeof LogoutRoute
  '/customers/users/$userId': typeof CustomersUsersUserIdRouteRouteWithChildren
  '/customers/guarantors': typeof CustomersGuarantorsIndexRoute
  '/customers/users': typeof CustomersUsersIndexRoute
  '/customers/users/$userId/app-and-system': typeof CustomersUsersUserIdAppAndSystemRoute
  '/customers/users/$userId/bank-details': typeof CustomersUsersUserIdBankDetailsRoute
  '/customers/users/$userId/details': typeof CustomersUsersUserIdDetailsRoute
  '/customers/users/$userId/documents': typeof CustomersUsersUserIdDocumentsRoute
  '/customers/users/$userId/loans': typeof CustomersUsersUserIdLoansRoute
  '/customers/users/$userId/savings': typeof CustomersUsersUserIdSavingsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/customers': typeof CustomersRouteRouteWithChildren
  '/login': typeof LoginRoute
  '/logout': typeof LogoutRoute
  '/customers/guarantors': typeof CustomersGuarantorsRouteRouteWithChildren
  '/customers/users': typeof CustomersUsersRouteRouteWithChildren
  '/customers/users/$userId': typeof CustomersUsersUserIdRouteRouteWithChildren
  '/customers/guarantors/': typeof CustomersGuarantorsIndexRoute
  '/customers/users/': typeof CustomersUsersIndexRoute
  '/customers/users/$userId/app-and-system': typeof CustomersUsersUserIdAppAndSystemRoute
  '/customers/users/$userId/bank-details': typeof CustomersUsersUserIdBankDetailsRoute
  '/customers/users/$userId/details': typeof CustomersUsersUserIdDetailsRoute
  '/customers/users/$userId/documents': typeof CustomersUsersUserIdDocumentsRoute
  '/customers/users/$userId/loans': typeof CustomersUsersUserIdLoansRoute
  '/customers/users/$userId/savings': typeof CustomersUsersUserIdSavingsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/customers'
    | '/login'
    | '/logout'
    | '/customers/guarantors'
    | '/customers/users'
    | '/customers/users/$userId'
    | '/customers/guarantors/'
    | '/customers/users/'
    | '/customers/users/$userId/app-and-system'
    | '/customers/users/$userId/bank-details'
    | '/customers/users/$userId/details'
    | '/customers/users/$userId/documents'
    | '/customers/users/$userId/loans'
    | '/customers/users/$userId/savings'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/customers'
    | '/login'
    | '/logout'
    | '/customers/users/$userId'
    | '/customers/guarantors'
    | '/customers/users'
    | '/customers/users/$userId/app-and-system'
    | '/customers/users/$userId/bank-details'
    | '/customers/users/$userId/details'
    | '/customers/users/$userId/documents'
    | '/customers/users/$userId/loans'
    | '/customers/users/$userId/savings'
  id:
    | '__root__'
    | '/'
    | '/customers'
    | '/login'
    | '/logout'
    | '/customers/guarantors'
    | '/customers/users'
    | '/customers/users/$userId'
    | '/customers/guarantors/'
    | '/customers/users/'
    | '/customers/users/$userId/app-and-system'
    | '/customers/users/$userId/bank-details'
    | '/customers/users/$userId/details'
    | '/customers/users/$userId/documents'
    | '/customers/users/$userId/loans'
    | '/customers/users/$userId/savings'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CustomersRouteRoute: typeof CustomersRouteRouteWithChildren
  LoginRoute: typeof LoginRoute
  LogoutRoute: typeof LogoutRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CustomersRouteRoute: CustomersRouteRouteWithChildren,
  LoginRoute: LoginRoute,
  LogoutRoute: LogoutRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/customers",
        "/login",
        "/logout"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/customers": {
      "filePath": "customers/route.tsx",
      "children": [
        "/customers/guarantors",
        "/customers/users"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/logout": {
      "filePath": "logout.tsx"
    },
    "/customers/guarantors": {
      "filePath": "customers/guarantors/route.tsx",
      "parent": "/customers",
      "children": [
        "/customers/guarantors/"
      ]
    },
    "/customers/users": {
      "filePath": "customers/users/route.tsx",
      "parent": "/customers",
      "children": [
        "/customers/users/$userId",
        "/customers/users/"
      ]
    },
    "/customers/users/$userId": {
      "filePath": "customers/users/$userId/route.tsx",
      "parent": "/customers/users",
      "children": [
        "/customers/users/$userId/app-and-system",
        "/customers/users/$userId/bank-details",
        "/customers/users/$userId/details",
        "/customers/users/$userId/documents",
        "/customers/users/$userId/loans",
        "/customers/users/$userId/savings"
      ]
    },
    "/customers/guarantors/": {
      "filePath": "customers/guarantors/index.tsx",
      "parent": "/customers/guarantors"
    },
    "/customers/users/": {
      "filePath": "customers/users/index.tsx",
      "parent": "/customers/users"
    },
    "/customers/users/$userId/app-and-system": {
      "filePath": "customers/users/$userId/app-and-system.tsx",
      "parent": "/customers/users/$userId"
    },
    "/customers/users/$userId/bank-details": {
      "filePath": "customers/users/$userId/bank-details.tsx",
      "parent": "/customers/users/$userId"
    },
    "/customers/users/$userId/details": {
      "filePath": "customers/users/$userId/details.tsx",
      "parent": "/customers/users/$userId"
    },
    "/customers/users/$userId/documents": {
      "filePath": "customers/users/$userId/documents.tsx",
      "parent": "/customers/users/$userId"
    },
    "/customers/users/$userId/loans": {
      "filePath": "customers/users/$userId/loans.tsx",
      "parent": "/customers/users/$userId"
    },
    "/customers/users/$userId/savings": {
      "filePath": "customers/users/$userId/savings.tsx",
      "parent": "/customers/users/$userId"
    }
  }
}
ROUTE_MANIFEST_END */
