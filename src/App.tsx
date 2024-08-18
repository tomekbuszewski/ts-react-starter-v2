import { Goodbye, Hello, Nested } from "@pages";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

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
]);

function App() {
  return (
    <main className="m-auto max-w-[900px]">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
