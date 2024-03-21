import { createFileRoute, redirect } from "@tanstack/react-router";
import { localStorage } from "@shared/lib";

export const Route = createFileRoute("/sign-in")({
  beforeLoad: ({ context: { queryClient }, params, search }) => {
    const token = localStorage.getValue("token");
    const user = queryClient.getQueryData(["user", token]);

    console.log("PARAMS", params, search);
    console.log("[SING-IN]:", token, user);

    const redirectTo = (search as { redirect?: string }).redirect || "/";

    if (user) {
      throw redirect({
        to: redirectTo, // FIXME неправильно работает редирект
      });
    }
  },
});
