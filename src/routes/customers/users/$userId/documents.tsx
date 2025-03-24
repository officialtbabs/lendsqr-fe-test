import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/customers/users/$userId/documents")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Documents</div>;
}
