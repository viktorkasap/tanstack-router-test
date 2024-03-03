import { useTodos } from "@pages/todos/use-todos";
import { Link } from "@tanstack/react-router";

export const TodosList = () => {
  const { data, isError, error, isLoading } = useTodos();

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
