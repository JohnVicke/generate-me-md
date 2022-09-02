import NextAuth, { Session, type NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";

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
    async jwt({ token, user, profile }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      if (profile) {
        token.githubId = profile.id;
      }
      return token;
    },
    session({ session, token }) {
      const sess: Session = {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
        },
      };

      return sess;
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
