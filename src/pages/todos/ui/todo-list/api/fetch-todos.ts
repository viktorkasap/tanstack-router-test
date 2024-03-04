import axios from "axios";

import { Todos } from "@shared/types";

export const fetchTodos = async (): Promise<Todos> => {
  // Delay
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  try {
    const request = await axios.get<Todos>("https://dummyjson.com/todos");
    return request.data;
  } catch (err) {
    if (err instanceof Error || axios.isAxiosError(err)) {
      throw new Error(err.message);
    }

    throw new Error("Unknown error occurred!");
  }
};
