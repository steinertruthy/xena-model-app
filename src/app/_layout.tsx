import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Splash from "./splash";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Splash />
    </QueryClientProvider>
  );
}
