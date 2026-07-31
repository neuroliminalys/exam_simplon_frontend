import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import MuseumPage from "./views/MuseumPage";
import MuseumDetailsPage from "./views/MuseumDetailsPage";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MuseumPage />,
    },
    {
      path: "/details/:id",
      element: <MuseumDetailsPage />,
    },
    {
      path: "*",
      element: <span>NOT IMPLEMENTED</span>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
