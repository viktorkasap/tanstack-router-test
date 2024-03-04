import { TodoId } from "@shared/types";

import { TodoBody, TodoFooter, TodoHeader } from "./ui";

interface TodoProps {
  todoId: TodoId;
}

export function Todo({ todoId }: TodoProps) {
  return (
    <div>
      <TodoHeader todoId={todoId}></TodoHeader>
      <TodoBody todoId={todoId} />
      <TodoFooter />
    </div>
  );
}
