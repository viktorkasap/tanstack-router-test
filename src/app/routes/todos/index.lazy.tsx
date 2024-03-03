import { createLazyFileRoute } from "@tanstack/react-router";
import { Todos } from "@pages/todos";

export const Route = createLazyFileRoute("/todos/")({
  component: Todos,
});
