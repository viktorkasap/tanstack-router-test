import { createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { BasicTemplate } from "@pages";
import { QueryClient } from "@tanstack/react-query";
import { userQueryOptions } from "@entities/user";
import { ApiError } from "@shared/types";

type RouterContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootRoute,
  errorComponent: ({ error }) => <>Error: {(error as ApiError).message}</>,
  pendingComponent: () => <h1>Checking Authorization...</h1>,

  // loader: ({ context: { queryClient } }) =>
  //   queryClient.ensureQueryData(userQueryOptions()),

  loader: ({ context: { queryClient } }) => {
    try {
      // * return нужен чтобы отобразить ошибку в errorComponent || pendingComponent
      // * если не сделать return то errorComponent || pendingComponent не будет отображен
      // return queryClient.ensureQueryData(userQueryOptions());
      queryClient.ensureQueryData(userQueryOptions());
    } catch (err) {
      console.log("[ROOT ERROR]:", err);
    }

    // * Альтернативный вариант получения данных
    // return queryClient.ensureQueryData(userQueryOptions()).catch((err) => {
    //   console.log("[ROOT ERROR]:", err);
    // });
  },
});

function RootRoute() {
  return (
    <div id="root-route">
      <BasicTemplate />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
