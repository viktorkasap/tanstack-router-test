import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootRoute,
});

function RootRoute() {
  return (
    <div id="root-route">
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/"} preload="intent">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} preload="intent">
                About
              </Link>
            </li>
            <li>
              <Link to={"/posts"} preload="intent">
                Posts
              </Link>
            </li>
            <li>
              <Link to={"/todos"} preload="intent">
                Todos
                {/*<MatchRoute to="/todos" pending>*/}
                {/*  <>Loading.............</>*/}
                {/*</MatchRoute>*/}
                {/*<MatchRoute to="/todos" pending>*/}
                {/*  {(match) => {*/}
                {/*    console.log("Match", match);*/}
                {/*    return match ? <>Loading.............</> : <>Todos</>;*/}
                {/*  }}*/}
                {/*</MatchRoute>*/}
              </Link>
            </li>
            <li>
              <Link to={"/layout-a"} preload="intent">
                Layout
              </Link>
            </li>
            <li>
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-expect-error */}
              <Link to={"/123"} preload="intent">
                No exists
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
