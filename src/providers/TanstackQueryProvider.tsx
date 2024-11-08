import { PropsWithChildren } from "react";
import { queryClient } from "@/api/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export default function TanstackQueryProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
