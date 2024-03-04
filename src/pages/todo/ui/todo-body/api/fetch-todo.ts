import axios from "axios";

import { Todo, TodoId } from "@shared/types";

interface FetchTodo {
  todoId: TodoId;
}

export const fetchTodo = async ({ todoId }: FetchTodo): Promise<Todo> => {
  // Delay
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  try {
    const request = await axios.get<Todo>(
      `https://dummyjson.com/todos/${todoId}`,
    );
    return request.data;
  } catch (err) {
    if (err instanceof Error || axios.isAxiosError(err)) {
      throw err;
    }

    throw "Unknown error occurred!";
  }
};
