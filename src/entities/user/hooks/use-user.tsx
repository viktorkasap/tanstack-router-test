import { useLocalStorage } from "usehooks-ts";

import { useQueryUser } from "@entities/user";

export const useUser = () => {
  const [token] = useLocalStorage("token", "");
  const queryUser = useQueryUser(token);

  console.log("useUser token:", token);
  console.log("useUser queryUser:", queryUser);

  if (!queryUser.data) {
    return null;
  }

  return queryUser.data;
};
