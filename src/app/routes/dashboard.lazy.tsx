import { createLazyFileRoute } from "@tanstack/react-router";
import { Dashboard } from "@pages";

export const Route = createLazyFileRoute("/dashboard")({
  component: Dashboard,
});
