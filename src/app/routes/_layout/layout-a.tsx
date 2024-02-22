import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/layout-a")({
  component: LayoutA,
});
function LayoutA() {
  return (
    <div>
      <h1>Layout A</h1>
      <Outlet />
    </div>
  );
}
