import { createRouter, RouterProvider } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { routeTree } from "./routeTree.gen";
import { useUser } from "@entities/user";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    user: null,
  },
});

export function WithRouter() {
  const user = useUser();

  return (
    <>
      <RouterProvider router={router} context={{ user }} />
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
    </>
  );
}
