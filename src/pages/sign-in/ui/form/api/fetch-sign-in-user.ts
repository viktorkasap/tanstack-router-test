import axios from "axios";
import { User } from "@entities/user";
import { SignInProps } from "@shared/types";

export const fetchSignInUser = async ({ username, password }: SignInProps) => {
  try {
    const request = await axios.post<User>(
      "https://dummyjson.com/auth/login",
      {
        username,
        password,
        expiresInMins: 1,
      },
      {
        headers: { "Content-Type": "application/json" },
      },
    );

    return request.data;
  } catch (err) {
    if (err instanceof Error || axios.isAxiosError(err)) {
      throw err;
    }

    throw "Unknown error occurred!";
  }
};
