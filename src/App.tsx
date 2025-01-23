import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
