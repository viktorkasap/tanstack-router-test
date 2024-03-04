import { Outlet } from "@tanstack/react-router";

import { Header, Main } from "@widgets";

export function BasicTemplate() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
