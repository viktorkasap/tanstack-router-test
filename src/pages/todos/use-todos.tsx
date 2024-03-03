import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "@pages/todos/fetch-todos";

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    retry: 0,
    staleTime: Infinity,
  });
};