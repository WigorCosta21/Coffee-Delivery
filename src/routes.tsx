import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index";
import { Layout } from "./components/Layout";
import Checkout from "@pages/Checkout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default router;
