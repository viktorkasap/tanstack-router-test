import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about/")({
  component: AboutLazy,
});

function AboutLazy() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to={"/"}>Home page</Link>
    </div>
  );
}
