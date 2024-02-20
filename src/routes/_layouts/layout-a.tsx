import { createFileRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createFileRoute("/_layouts/layout-a")({
  component: LayoutA,
});

function LayoutA() {
  return (
    <div>
      <h1>Layout A</h1>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
}
