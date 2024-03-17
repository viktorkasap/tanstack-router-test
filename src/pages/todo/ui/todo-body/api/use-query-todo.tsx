import { useQuery } from "@tanstack/react-query";

import { TodoId } from "@shared/types";

import { fetchTodo } from "./fetch-todo";

export const useQueryTodo = ({ todoId }: { todoId: TodoId }) => {
  return useQuery({
    queryKey: ["todo", todoId],
    queryFn: () => fetchTodo({ todoId: todoId }),
    retry: 0,
  });
};
