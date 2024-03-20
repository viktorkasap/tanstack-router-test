import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { useLocalStorage } from "usehooks-ts";
import { useSignIn } from "../api";
import { useNavigate } from "@tanstack/react-router";

type UpdateFunctions = {
  username: Dispatch<SetStateAction<string>>;
  password: Dispatch<SetStateAction<string>>;
};

export const useForm = () => {
  const [username, setUserName] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");

  const signIn = useSignIn();
  const navigate = useNavigate();
  const [, setToken] = useLocalStorage("token", "");

  if (signIn.isSuccess) {
    navigate({ to: "/dashboard" });
  }

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const updates = {
      username: setUserName,
      password: setPassword,
    };

    updates[name as keyof UpdateFunctions](value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!signIn.isPending) {
      signIn.mutateAsync({ username, password }).then(({ token }) => {
        setToken(token);
      });
    }
  };

  return {
    username,
    password,
    handleInput,
    handleSubmit,
    isPending: signIn.isPending,
    isError: signIn.isError,
    error: signIn.error,
  };
};
