import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { GlobalStyle } from "styles/globals";
import { CartProvider } from "context/cartContext";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
