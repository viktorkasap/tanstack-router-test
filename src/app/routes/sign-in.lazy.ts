import { createLazyFileRoute } from "@tanstack/react-router";
import { SignIn } from "@pages";

// TODO:
//  1) если пользователь уже есть то сменить ссылку на Logout
//  2) Добавить редирект если пользователь залогинен

export const Route = createLazyFileRoute("/sign-in")({
  component: SignIn,
});
