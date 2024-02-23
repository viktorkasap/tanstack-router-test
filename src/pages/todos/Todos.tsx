import { Link } from "@tanstack/react-router";
import { TodosList } from "@pages/todos/TodosList.tsx";

export function Todos() {
  return (
    <div>
      <h1>Todos</h1>

      <hr />

      <Link to={"/todos/$todoId"} params={{ todoId: "1" }}>
        Todo #1
      </Link>
      {" | "}
      <Link to={"/todos/$todoId"} params={{ todoId: "1" }}>
        Todo #2
      </Link>

      <hr />
      <TodosList />
    </div>
  );
}
