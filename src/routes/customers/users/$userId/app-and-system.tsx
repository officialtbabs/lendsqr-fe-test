import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/customers/users/$userId/app-and-system")(
  {
    component: RouteComponent,
  },
);

function RouteComponent() {
  return <div>App and System</div>;
}
