import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { GlobalStyle } from "styles/globals";
import { CartProvider } from "context/cartContext";
import { OrderProvider } from "context/orderContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <OrderProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <GlobalStyle />
          <RouterProvider router={router} />
        </OrderProvider>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
