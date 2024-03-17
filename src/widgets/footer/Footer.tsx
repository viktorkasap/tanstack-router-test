import { Container } from "@shared/ui";

export function Footer() {
  return (
    <footer>
      <Container>
        <hr className="mt-10" />
        <p className="pt-5 text-sm">
          @{new Date().getFullYear()} Tanstack Router Test
        </p>
      </Container>
    </footer>
  );
}
