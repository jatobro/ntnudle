import { api } from "./utils/api";

export const getProgrammes = () => {
  const { isLoading, data } = api.programme.getAll.useQuery();

  if (isLoading || !data) return [];

  return data;
};
