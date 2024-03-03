import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootRoute,
});

function RootRoute() {
  return (
    <div id="root-route">
      <header>
        <div className="container">
          <nav className="topNav">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/posts"}>Posts</Link>
              </li>
              <li>
                <Link to={"/todos"}>Todos</Link>
              </li>
              <li>
                <Link to={"/layout-a"}>Layout</Link>
              </li>
              <li>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-expect-error */}
                <Link to={"/123"}>No exists</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
