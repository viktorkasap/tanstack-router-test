import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: IndexLazy,
});

function IndexLazy() {
  return (
    <div>
      <h1>Index Page</h1>
      <Link to={"/about"}>About page</Link>
    </div>
  );
}
