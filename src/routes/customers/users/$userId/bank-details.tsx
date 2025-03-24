import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/customers/users/$userId/bank-details")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Bank Details</div>;
}
