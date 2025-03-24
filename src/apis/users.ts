import { queryOptions } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/react-start";
import { http } from "~/config/SetupBase";

export const getUsersFn = createServerFn({ method: "GET" })
  .validator((d: { page: number; limit: number }) => d)
  .handler(async ({ data }) => {
    const res = await http.get(
      `/users?limit=${data.limit}&skip=${data.limit * (data.page - 1)}`,
    );

    return res.data;
  });

export const fetchUsersQueryOptions = ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) =>
  queryOptions({
    queryKey: ["users", page, limit],
    queryFn: () => getUsersFn({ data: { page, limit } }),
  });

export const getUserDetailsByIdFn = createServerFn({ method: "GET" })
  .validator((d: { id: number }) => d)
  .handler(async ({ data }) => {
    const res = await http.get(`/users/${data.id}`);

    console.log(res.data);

    return res.data;
  });
