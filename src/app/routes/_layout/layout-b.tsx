import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/layout-b")({
  component: LayoutB,
});

function LayoutB() {
  return (
    <div>
      <h1>Layout B</h1>
      <Outlet />
    </div>
  );
}
