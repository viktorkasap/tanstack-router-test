import { createLazyFileRoute } from "@tanstack/react-router";

import { Todos } from "@pages";

export const Route = createLazyFileRoute("/todos/")({
  component: Todos,
});
