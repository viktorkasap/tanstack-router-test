import { Link } from "@tanstack/react-router";

export function Navigation() {
  return (
    <nav className="py-10 topNav">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/posts"}>Posts</Link>
        </li>
        <li>
          <Link to={"/todos"}>Todos</Link>
        </li>
        <li>
          <Link to={"/sign-in"}>Sign-In</Link>
        </li>
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
        <li>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore @ts-expect-error */}
          <Link to={"/123"}>404 🤷‍</Link>
        </li>
      </ul>
    </nav>
  );
}
