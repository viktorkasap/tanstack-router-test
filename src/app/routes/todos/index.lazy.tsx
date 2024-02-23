import { createLazyFileRoute } from "@tanstack/react-router";
import { Todos } from "@pages/todos";

export const Route = createLazyFileRoute("/todos/")({
  component: Todos,
  // pendingComponent: () => <div>Pending Component Todos ...</div>,
  // notFoundComponent: () => <div>Not Found Component Todos ...</div>,
  // errorComponent: () => <div>Error Component Todos ...</div>,
});
