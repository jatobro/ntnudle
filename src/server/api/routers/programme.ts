import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const programmeRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.programme.findMany();
  }),
});
