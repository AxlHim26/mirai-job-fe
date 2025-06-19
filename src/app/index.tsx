import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./router";
import { AppProvider } from "./provider";
import { useQueryClient } from "@tanstack/react-query";

export const AppRouter = () => {
  const queryClient = useQueryClient();
  const router = useMemo(() => createRouter(queryClient), [queryClient]);
  return <RouterProvider router={router} />;
};

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
