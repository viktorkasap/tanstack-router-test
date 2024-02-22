import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { PropsWithChildren } from "react";

export const Route = createRootRoute({
  component: () => (
    <RootRoute>
      <Outlet />
      <TanStackRouterDevtools />
    </RootRoute>
  ),
});

const RootRoute = ({ children }: PropsWithChildren) => {
  return (
    <div id="root-route">
      <header>
        <nav>
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
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
};
