import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Header } from "@widgets/header";
import { Main } from "@widgets/main";

export const Route = createRootRoute({
  component: RootRoute,
});

function RootRoute() {
  return (
    <div id="root-route">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
