import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import { lazy, Suspense, type LazyExoticComponent, type ReactNode } from "react";

const MuseumPage = lazy(() => import("./views/MuseumPage"))
const MuseumDetailsPage = lazy(() => import("./views/MuseumDetailsPage"))

function Suspend(Component: LazyExoticComponent<(() => ReactNode)>) {
  return (<Suspense fallback={<p>Loading...</p>}>
    {<Component/>}
  </Suspense>)
}

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: Suspend(MuseumPage),
    },
    {
      path: "/details/:id",
      element: Suspend(MuseumDetailsPage),
    },
    {
      path: "*",
      element: <span>NOT IMPLEMENTED</span>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
