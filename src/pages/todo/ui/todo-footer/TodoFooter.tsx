import { Link } from "@tanstack/react-router";

export function TodoFooter() {
  return (
    <div className="pt-10">
      <Link to="/todos">← Back Todos</Link>
    </div>
  );
}
