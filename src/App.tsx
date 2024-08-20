import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { activities } from "@features";
import { ApiPage, Hello, Nested } from "@pages";
import { Goodbye } from "@pages/lazy";
import { ReactQueryProvider } from "@providers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hello />,
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
