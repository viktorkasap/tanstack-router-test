import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <div>
      <h1>404 🐝</h1>
      <Link to={"/"}>Home Page</Link>
    </div>
  );
}
