import { Link } from "@tanstack/react-router";

export function About() {
  return (
    <div>
      <div className="pb-10">
        <h1>About Page</h1>
      </div>

      <Link to={"/"}>Home page</Link>
    </div>
  );
}
