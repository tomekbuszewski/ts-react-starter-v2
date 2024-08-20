import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { activities } from "@features";
import { ApiPage, BrokenPage, Hello, Nested } from "@pages";
import { Goodbye } from "@pages/lazy";
import { ErrorBoundaryProvider, ReactQueryProvider } from "@providers";

const router = createBrowserRouter([
  {
    element: <ErrorBoundaryProvider />,
    children: [
      {
        path: "/",
        element: <Hello />,
      },
      {
        path: "/broken",
        element: <BrokenPage />,
      },
      {
        path: "/goodbye",
        element: <Goodbye />,
      },
      {
        path: "/nested",
        element: <Outlet />,
        children: Nested,
      },
      {
        path: "/with-fetch",
        element: <ApiPage />,
        children: activities,
      },
    ],
  },
]);

function App() {
  return (
    <main className="m-auto max-w-[900px]">
      <ReactQueryProvider>
        <RouterProvider router={router} />
      </ReactQueryProvider>
    </main>
  );
}

export default App;
