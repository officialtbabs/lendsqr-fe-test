import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/customers")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
