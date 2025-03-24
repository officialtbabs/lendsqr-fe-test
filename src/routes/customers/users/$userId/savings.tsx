import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/customers/users/$userId/savings")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Savings</div>;
}
