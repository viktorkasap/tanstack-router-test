import { Container, Header as HeaderLayout } from "@shared/ui";

import { Navigation } from "./ui";

export function Header() {
  return (
    <HeaderLayout>
      <Container>
        <Navigation />
      </Container>
    </HeaderLayout>
  );
}
