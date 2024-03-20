import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { useLocalStorage } from "usehooks-ts";
import { useSignIn } from "../api";

type UpdateFunctions = {
  username: Dispatch<SetStateAction<string>>;
  password: Dispatch<SetStateAction<string>>;
};

export const useForm = () => {
  const [username, setUserName] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");

  const signIn = useSignIn();
  const [, setToken] = useLocalStorage("token", "");

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
      signIn.mutateAsync({ username, password }).then((data) => {
        setToken(data.token);
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
