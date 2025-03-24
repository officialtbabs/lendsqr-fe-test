import { createFileRoute } from "@tanstack/react-router";
import UserDetails from "~/pages/customer/users/UserDetails";

export const Route = createFileRoute("/customers/users/$userId/details")({
  component: RouteComponent,
});

function RouteComponent() {
  return <UserDetails />;
}
