import { createFileRoute } from "@tanstack/react-router";

import { Todo } from "@pages";

export const Route = createFileRoute("/todos/$todoId")({
  component: TodoRouteComponent,
});

function TodoRouteComponent() {
  const { todoId } = Route.useParams();

  return <Todo todoId={todoId} />;
}
