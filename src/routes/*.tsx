import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/*")({
  component: __404,
});

function __404() {
  return (
    <div>
      <h1>404 🐝</h1>
      <Link to={"/"}>Home Page</Link>
    </div>
  );
}
