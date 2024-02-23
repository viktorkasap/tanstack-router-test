import { createLazyFileRoute } from "@tanstack/react-router";
import { Todos } from "@pages/todos";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

interface Todos {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}

export const Route = createLazyFileRoute("/todos/")({
  component: Todos,
  pendingComponent: () => <div>Pending Component Todos ...</div>,
  notFoundComponent: () => <div>Not Found Component Todos ...</div>,
  errorComponent: () => <div>Error Component Todos ...</div>,
});

// function Todos() {
//   const { deferredSlowData } = Route.useLoaderData();
//
//   return (
//     <div>
//       <h1>Todos Index Page</h1>
//
//       <Link to={"/todos/$todoId"} params={{ todoId: "1" }}>
//         Todo #1
//       </Link>
//       {" | "}
//       <Link to={"/todos/$todoId"} params={{ todoId: "1" }}>
//         Todo #2
//       </Link>
//
//       <Suspense fallback={<div>Loading Todos...</div>}>
//         <Await promise={deferredSlowData}>
//           {(data) => {
//             return (
//               <ul>
//                 {(data as Todos).todos.map((todo) => (
//                   <li key={todo.id}>{todo.todo}</li>
//                 ))}
//               </ul>
//             );
//           }}
//         </Await>
//       </Suspense>
//     </div>
//   );
// }
