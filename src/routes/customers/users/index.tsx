import { createFileRoute } from "@tanstack/react-router";
import { fetchUsersQueryOptions } from "~/apis/users";
import Users from "~/pages/customer/users/Users";
import { queryClient } from "~/routes/__root";

export const Route = createFileRoute("/customers/users/")({
  loader: async () => {
    await queryClient.ensureQueryData(
      fetchUsersQueryOptions({ page: 1, limit: 10 }),
    );
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <Users />;
}
