import { createFileRoute, redirect } from "@tanstack/react-router";
import { localStorage } from "@shared/lib";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: ({ context: { queryClient } }) => {
    const token = localStorage.getValue("token");
    const user = queryClient.getQueryData(["user", token]);

    console.log("[DASHBOARD]:", token, user);

    if (!user) {
      throw redirect({
        to: "/sign-in",
      });
    }
  },
  // component: Dashboard,
});
