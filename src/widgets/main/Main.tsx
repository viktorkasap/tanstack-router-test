import { Container, Main as MainUi } from "@shared/ui";
import { Outlet } from "@tanstack/react-router";

export function Main() {
  return (
    <MainUi>
      <Container>
        <Outlet />
      </Container>
    </MainUi>
  );
}
