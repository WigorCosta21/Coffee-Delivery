import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { GlobalStyle } from "styles/globals";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
