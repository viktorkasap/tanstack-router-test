import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Header } from "@widgets/header";

export const Route = createRootRoute({
  component: RootRoute,
});

function RootRoute() {
  return (
    <div id="root-route">
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
