import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "./fetch-todos.ts";

export const TodosList = () => {
  const todosQuery = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    retry: 0,
  });

  const todos = todosQuery.data;

  if (todosQuery.isError) {
    return <>Error: {todosQuery.error}</>;
  }

  if (todosQuery.isLoading) {
    return <>Loading Todos List ...</>;
  }

  return (
    <>
      <h2>List</h2>

      <ul>
        {todos && todos.todos.map((todo) => <li key={todo.id}>{todo.todo}</li>)}
      </ul>
    </>
  );
};
