import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sign-in")({
  beforeLoad: ({ context }) => {
    console.log("[sign-in context]:", context);

    if (context.user) {
      throw redirect({
        to: "/dashboard",
      });
    }
  },
});
