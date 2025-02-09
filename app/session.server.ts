import { createCookieSessionStorage } from "@remix-run/node";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "cart_session",
      secrets: ["your-secret-key"], // Change this to a real secret
      sameSite: "lax",
      path: "/",
      httpOnly: true,
    },
  });

export { getSession, commitSession, destroySession };
