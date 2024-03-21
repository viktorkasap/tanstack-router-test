import { queryOptions } from "@tanstack/react-query";

import { fetchUser } from "./fetch-user";
import { localStorage } from "@shared/lib";

export const userQueryOptions = () => {
  const token = localStorage.getValue("token");

  // if (!token) {
  //   return false;
  // }

  return queryOptions({
    queryKey: ["user", token],
    queryFn: () => fetchUser({ token }),
    enabled: Boolean(token),
    retry: 0,
    staleTime: Infinity,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
};
