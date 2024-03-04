import { WithQueryClient, WithRouter } from "./providers";

export function App() {
  return (
    <WithQueryClient>
      <WithRouter />
    </WithQueryClient>
  );
}
