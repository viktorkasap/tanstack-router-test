import { TodoId } from "@shared/types";

import { useQueryTodo } from "./api";

interface TodoBodyProps {
  todoId: TodoId;
}

export function TodoBody({ todoId }: TodoBodyProps) {
  const { data, isError, error, isLoading } = useQueryTodo({ todoId });

  if (isError) {
    return (
      <p>
        ⚠️ Error: <b>{error.message}</b>
      </p>
    );
  }

  if (isLoading) {
    return <p>🌀 Loading Todo Content ...</p>;
  }

  if (!data) {
    return <p>No Todo Data</p>;
  }

  return (
    <div>
      <p>
        <b>Todo Content:</b> {data.todo}
      </p>
      <p>
        <b>Completed:</b> {String(data.completed)}
      </p>
      <p>
        <b>User ID:</b> {data.userId}
      </p>
    </div>
  );
}
