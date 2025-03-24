import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import {
  clearAppSession,
  getAppSession,
  updateAppSession,
} from "~/utils/session";

export const loginFn = createServerFn({ method: "POST" })
  .validator((d: { email: string; password: string }) => d)
  .handler(async ({ data }) => {
    const session = await updateAppSession({
      userEmail: data.email,
    });

    if (session.data.userEmail) {
      return {
        user: { email: session.data.userEmail },
      };
    }
  });

export const logoutFn = createServerFn().handler(async () => {
  await clearAppSession();

  console.log("logout");
});

export const getAuthenticationStatus = createServerFn({
  method: "GET",
}).handler(async () => {
  const session = await getAppSession();

  const isAuthenticated = !!session?.data?.userEmail;

  return isAuthenticated;
});
