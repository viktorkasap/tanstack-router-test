import axios from "axios";
import { User } from "@entities/user";

export const fetchUser = async ({ token }: { token: string }) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  try {
    const request = await axios.get<User>("https://dummyjson.com/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return request.data;
  } catch (err) {
    if (err instanceof Error || axios.isAxiosError(err)) {
      throw err;
    }

    throw "Unknown error occurred!";
  }
};
