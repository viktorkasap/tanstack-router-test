import { createFileRoute } from "@tanstack/react-router";

import { NotFound } from "@pages";

export const Route = createFileRoute("/*")({
  component: NotFound,
});
