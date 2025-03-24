import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/customers/users")({
  component: CustomerUsersRouteComponent,
});

function CustomerUsersRouteComponent() {
  return <Outlet />;
}
