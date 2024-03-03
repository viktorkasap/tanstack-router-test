import { Link } from "@tanstack/react-router";

export function Navigation() {
  return (
    <nav className="topNav">
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
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore @ts-expect-error */}
          <Link to={"/123"}>No exists</Link>
        </li>
      </ul>
    </nav>
  );
}
