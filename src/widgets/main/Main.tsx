import { PropsWithChildren } from "react";

import { Main as MainLayout } from "@shared/ui";

export function Main({ children }: PropsWithChildren) {
  return <MainLayout>{children}</MainLayout>;
}
