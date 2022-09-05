// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { githubRouter } from "./github/github-router";
import { profileRouter } from "./profile-router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("github.", githubRouter)
  .merge("profile.", profileRouter);

export type AppRouter = typeof appRouter;
