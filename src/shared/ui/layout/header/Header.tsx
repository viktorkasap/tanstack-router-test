import { PropsWithChildren } from "react";

export function Header({ children }: PropsWithChildren) {
  return (
    <header>
      <div className="container">{children}</div>
    </header>
  );
}
