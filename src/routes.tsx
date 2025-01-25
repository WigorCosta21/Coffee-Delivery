import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index";
import { Layout } from "./components/Layout";
import Checkout from "@pages/Checkout";
import OrderConfirmed from "@pages/OrderConfirmed";

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
      {
        path: "/order-confirmed",
        element: <OrderConfirmed />,
      },
    ],
  },
]);

export default router;
