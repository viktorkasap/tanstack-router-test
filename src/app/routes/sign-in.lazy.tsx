import { createLazyFileRoute } from "@tanstack/react-router";
import { SignIn } from "@pages";

export const Route = createLazyFileRoute("/sign-in")({
  component: SignIn,
});
