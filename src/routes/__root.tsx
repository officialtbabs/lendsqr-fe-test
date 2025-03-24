// app/routes/__root.tsx
import { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  redirect,
} from "@tanstack/react-router";
import defaultStyles from "~/styles/defaultStyles.scss?url";
import globalStyles from "~/styles/globalStyles.scss?url";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary";
import { NotFound } from "~/components/NotFound";
import AuthLayout from "~/layouts/AuthLayout";
import MainLayout from "~/layouts/MainLayout";
import { getAuthenticationStatus, logoutFn } from "~/apis/auth";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Lendsqr Test",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: defaultStyles,
        precedence: "default",
      },
      {
        rel: "stylesheet",
        href: globalStyles,
        precedence: "default",
      },
    ],
  }),
  beforeLoad: async ({ location }) => {
    const currentPath = location.pathname;

    if (currentPath === "/logout") {
      await logoutFn();

      throw redirect({
        href: "/login",
      });
    } else {
      const isAuthenticated = await getAuthenticationStatus();
      const publicRoutes = ["/login"];
      const isPublicRoute = publicRoutes.includes(currentPath);

      if (!isAuthenticated && !isPublicRoute) {
        throw redirect({ href: "/login" });
      }

      if (isAuthenticated && isPublicRoute) {
        throw redirect({ href: "/" });
      }

      return { isAuthenticated };
    }
  },
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

export const queryClient = new QueryClient();

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  const { isAuthenticated } = Route.useRouteContext();
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          {isAuthenticated ? (
            <MainLayout>{children}</MainLayout>
          ) : (
            <AuthLayout>{children}</AuthLayout>
          )}
        </QueryClientProvider>
        <Scripts />
      </body>
    </html>
  );
}
