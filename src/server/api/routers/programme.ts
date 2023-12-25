import z from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const programmeRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.programme.findMany();
  }),
  getByName: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.programme.findFirstOrThrow({
        where: {
          name: input.name,
        },
      });
    }),
});
