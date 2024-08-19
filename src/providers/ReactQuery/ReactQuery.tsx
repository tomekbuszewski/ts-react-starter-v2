import type { FC, PropsWithChildren } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface Props extends PropsWithChildren {
  client?: QueryClient;
}

const API_URL = import.meta.env.VITE_API_URL as string;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }): Promise<unknown> => {
        if (!Array.isArray(queryKey) || typeof queryKey[0] !== "string") {
          throw new Error("Invalid query key");
        }

        const url = (API_URL + "/" + queryKey[0]).replaceAll("//", "/");
        const response = await fetch(url);
        return response.json();
      },
    },
  },
});

const Provider: FC<Props> = ({ children, client = queryClient }) => {
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Provider;
