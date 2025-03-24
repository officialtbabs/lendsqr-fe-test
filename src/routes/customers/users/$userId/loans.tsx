import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/customers/users/$userId/loans")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Loans</div>;
}
