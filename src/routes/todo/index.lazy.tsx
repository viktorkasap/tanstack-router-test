import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/todo/")({
  component: TodoIndex,
});

function TodoIndex() {
  return (
    <div>
      <h1>Todo Index Page</h1>
      <Link to={"/"}>Home page</Link>
      <Link
        to={"/todo/$todo_id"}
        params={{ todo_id: "1" }}
        search={{ page: 1 }}
      >
        Todo #1
      </Link>
      <Link
        to={"/todo/$todo_id"}
        params={{ todo_id: "2" }}
        search={{ page: 1 }}
      >
        Todo #2
      </Link>
    </div>
  );
}
