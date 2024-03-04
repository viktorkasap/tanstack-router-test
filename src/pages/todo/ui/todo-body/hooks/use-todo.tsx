import { useQuery } from "@tanstack/react-query";

import { TodoId } from "@shared/types";

import { fetchTodo } from "../api/fetch-todo";

export const useTodo = ({ todoId }: { todoId: TodoId }) => {
  return useQuery({
    queryKey: ["todo", todoId],
    queryFn: () => fetchTodo({ todoId: todoId }),
    retry: 0,
  });
};
