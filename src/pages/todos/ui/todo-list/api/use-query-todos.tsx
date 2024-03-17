import { useQuery } from "@tanstack/react-query";

import { fetchTodos } from "./fetch-todos";

export const useQueryTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    retry: 0,
    staleTime: Infinity,
  });
};
