import { Link } from "@tanstack/react-router";

export function Home() {
  return (
    <>
      <div className="pb-10">
        <h1>Home Page</h1>
      </div>
      <Link to={"/about"}>About page</Link>
    </>
  );
}
