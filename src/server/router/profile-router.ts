import { createProtectedRouter } from "@/server/router/protected-router";
import { TRPCError } from "@trpc/server";

// Example router with queries that can only be hit if the user requesting is signed in
export const profileRouter = createProtectedRouter().query("me", {
  async resolve({ ctx }) {
    const me = await ctx.prisma.user.findFirst({
      where: { id: ctx.session.userId },
      select: {
        name: true,
        image: true,
      },
    });
    if (!me) throw new TRPCError({ code: "UNAUTHORIZED" });

    return me;
  },
});
