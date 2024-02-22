import { Outlet, createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <div>I'm a main layout</div>
      <li>
        <Link to={"/layout-a"} preload="intent">
          Layout A
        </Link>
      </li>
      <li>
        <Link to={"/layout-b"} preload="intent">
          Layout B
        </Link>
      </li>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
