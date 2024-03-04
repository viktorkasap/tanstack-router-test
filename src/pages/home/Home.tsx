import { Link } from "@tanstack/react-router";

export function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to={"/about"}>About page</Link>
    </div>
  );
}
