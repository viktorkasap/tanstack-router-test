import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: ({ context }) => {
    console.log("dashboard-context", context);

    if (!context.user) {
      throw redirect({
        to: "/sign-in",
      });
    }
  },
  // component: Dashboard,
});
