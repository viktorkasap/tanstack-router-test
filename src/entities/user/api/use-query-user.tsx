import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "./fetch-user";
import { User } from "@entities/user";

export const useQueryUser = (token: string) => {
  return useQuery<User, Error>({
    queryKey: ["user", token],
    queryFn: () => fetchUser({ token }),
    enabled: Boolean(token),
    retry: 0,
    staleTime: Infinity,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
};
