import { TodoId } from "./types";
import { TodoHeader } from "./TodoHeader";
import { TodoBody } from "./TodoBody";
import { TodoFooter } from "./TodoFooter";

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
