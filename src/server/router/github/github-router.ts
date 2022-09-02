import { createProtectedRouter } from "../protected-router";
import { GithubRepo } from "./schemas/github-repo-schema";

const BASE_URL = "https://api.github.com";

// Example router with queries that can only be hit if the user requesting is signed in
export const githubRouter = createProtectedRouter()
  .query("getRepos", {
    async resolve({ ctx }) {
      const account = await ctx.prisma.account.findFirst({ where: { userId: ctx.session.user.id } });
      if (account?.access_token) {
        const res = await fetch(`${BASE_URL}/user/repos?type=owner&sort=created`, {
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${account.access_token}`,
          },
        });
        const repos = await res.json();

        const parsedRepos = repos.map((repo: GithubRepo) => {
          return {
            name: repo.name,
            id: repo.id,
            nodeId: repo.node_id,
          };
        }) as { name: string; id: string; nodeId: string }[];

        return parsedRepos;
      }
      return [];
    },
  })
  .query("getSecretMessage", {
    resolve({ ctx }) {
      return "He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever.";
    },
  });
