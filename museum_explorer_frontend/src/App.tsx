import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import MuseumPage from "./views/MuseumPage";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MuseumPage />,
    },
    {
      path: "*",
      element: <span>NOT IMPLEMENTED</span>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
