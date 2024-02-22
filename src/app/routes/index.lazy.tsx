import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to={"/about"}>About page</Link>
    </div>
  );
}
