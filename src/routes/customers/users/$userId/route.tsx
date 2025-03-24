import { createFileRoute, Outlet } from "@tanstack/react-router";
import { getUserDetailsByIdFn } from "~/apis/users";
import UserDetailsLayout from "~/layouts/UserDetailsLayout";

export const Route = createFileRoute("/customers/users/$userId")({
  loader: ({ params }) =>
    getUserDetailsByIdFn({ data: { id: Number(params.userId) } }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <UserDetailsLayout>
      <Outlet />
    </UserDetailsLayout>
  );
}
