import NextAuth, { type NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";
import { refreshGithubToken } from "@/utils/refresh-github-token";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({}) {
      return true;
    },
    async jwt({ token, user, account }) {
      if (user && account) {
        return {
          userId: user.id,
          accessToken: account.access_token,
          accessTokenExpiresIn: account.expires_at,
          refreshToken: account.refresh_token,
        };
      }

      if (Math.floor(new Date().getTime() / 1000) < token?.accessTokenExpiresIn) {
        return token;
      }

      return refreshGithubToken(token);
    },

    session({ session, token }) {
      return {
        ...session,
        userId: token.userId,
        accessToken: token.accessToken,
        accessTokenExpiresIn: token.accessTokenExpiresIn,
      };
    },
  },
  providers: [
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      async profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name ?? profile.login,
          email: profile.email,
          image: profile.avatar_url,
          githubUsername: profile.login,
          reposUrl: profile.repos_url,
          htmlUrl: profile.html_url,
        };
      },
    }),
  ],
};

export default NextAuth(authOptions);
