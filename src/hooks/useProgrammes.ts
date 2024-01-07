import { type Programme } from "@prisma/client";
import { api } from "~/utils/api";

export const useProgrammes = () => {
  const { isLoading, data } = api.programme.getAll.useQuery();

  if (isLoading) return { isLoading, programmes: [] };

  return { isLoading, programmes: data ? [...data] : ([] as Programme[]) };
};
