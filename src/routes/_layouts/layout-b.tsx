import { createFileRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createFileRoute("/_layouts/layout-b")({
  component: LayoutB,
});

function LayoutB() {
  return (
    <div>
      <h1>Layout B</h1>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
}
