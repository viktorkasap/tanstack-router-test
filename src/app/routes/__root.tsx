import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { BasicTemplate } from "@pages";

export const Route = createRootRoute({
  component: RootRoute,
});

function RootRoute() {
  return (
    <div id="root-route">
      <BasicTemplate />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
