// src/services/session.server.ts
import { useSession } from "@tanstack/react-start/server";

type SessionUser = {
  userEmail: string;
  expiresAt: number;
};

const SESSION_DURATION = 1000 * 60 * 60 * 2; // 2 hours

export const getAppSession = () => {
  const session = useSession<SessionUser>({
    name: "appSession",
    password:
      process.env.REACT_APP_SESSION_SECRET! ||
      "a78adf291998852df9c4933f203f76ef6aa0d6bdca3ccf9e8b99f4ba2f3e013f20163b6ac143b5922f415b31a5425731a182a809dd75dcc4cfbb3e5ce076b4fa",
  });

  return session;
};

export const updateAppSession = async (
  user: Omit<SessionUser, "expiresAt">,
): ReturnType<typeof useSession<SessionUser>> => {
  const session = await getAppSession();

  return session.update({
    ...user,
    expiresAt: Date.now() + SESSION_DURATION,
  });
};

export const clearAppSession = async (): ReturnType<
  typeof useSession<SessionUser>
> => {
  const session = await getAppSession();

  return await session.clear();
};
