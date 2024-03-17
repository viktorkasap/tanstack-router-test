import { Link } from "@tanstack/react-router";

import { useQueryTodos } from "./api";

export const TodosList = () => {
  const { data, isError, error, isLoading } = useQueryTodos();

  if (isError) {
    return (
      <p>
        Error: <>{error}</>
      </p>
    );
  }

  if (isLoading) {
    return <p>Loading Todos List ...</p>;
  }

  return (
    <div>
      <h2>List</h2>

      <ul className="todoList">
        {data &&
          data.todos.map((todo) => (
            <li key={todo.id}>
              <Link
                to="/todos/$todoId"
                params={{ todoId: `${todo.id}` }}
                className="todoLink linkVisited"
              >
                {todo.id} | {todo.todo}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
