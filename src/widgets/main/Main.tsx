import { PropsWithChildren } from "react";

export function Main({ children }: PropsWithChildren) {
  return (
    <main>
      <div className="container">{children}</div>
    </main>
  );
}
