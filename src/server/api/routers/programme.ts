import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const programmeRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.programme.create({
        data: {
          name: input.name,
        },
      });
    }),

  getById: publicProcedure
    .input(
      z.object({ id: z.number().positive("ID must be a positive integer") }),
    )
    .query(({ input, ctx }) => {
      return ctx.db.programme.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
});
