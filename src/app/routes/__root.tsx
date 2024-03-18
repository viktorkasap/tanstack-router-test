import { createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { BasicTemplate } from "@pages";
import { User } from "@entities/user";

type RouterContext = {
  user: User | null;
};

export const Route = createRootRouteWithContext<RouterContext>()({
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
