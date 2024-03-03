import { TodosList } from "@pages/todos/TodosList";
import { TodosHeader } from "@pages/todos/TodosHeader";

export function Todos() {
  return (
    <div>
      <TodosHeader />
      <TodosList />
    </div>
  );
}
