import { useQuery } from "@tanstack/react-query";
import { fetchTodo } from "./fetch-todo";
import { TodoId } from "./types";

export const useTodo = ({ todoId }: { todoId: TodoId }) => {
  return useQuery({
    queryKey: ["todo", todoId],
    queryFn: () => fetchTodo({ todoId: todoId }),
    retry: 0,
  });
};
