import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface JWT {
    githubId?: string;
  }
  interface Session {
    user?: {
      id: string;
      githubUsername?: string;
    } & DefaultSession["user"];
  }
}
