import { TodoId } from "@pages/todo/types";

interface TodoHeaderProps {
  todoId: TodoId;
}

export function TodoHeader({ todoId }: TodoHeaderProps) {
  return (
    <div>
      <h1>Todo {todoId}</h1>

      <hr />
    </div>
  );
}
