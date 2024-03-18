import { createLazyFileRoute } from "@tanstack/react-router";
import { SignIn } from "@pages";

// TODO:
//  1) если пользователь уже есть то сменить ссылку на Logout

export const Route = createLazyFileRoute("/sign-in")({
  component: SignIn,
});
