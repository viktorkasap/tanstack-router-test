import { createLazyFileRoute } from "@tanstack/react-router";

import { About } from "@pages";

export const Route = createLazyFileRoute("/about/")({
  component: About,
  pendingComponent: () => <div>Pending About ...</div>,
  notFoundComponent: () => <div>No Found the About</div>,
});
