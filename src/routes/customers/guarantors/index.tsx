import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/customers/guarantors/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/customers/guarantors/"!</div>;
}
