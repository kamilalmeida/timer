import { defaultTheme } from "../src/components/styles/themes/default";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./components/styles/themes/global";
import { Router } from "./components/Router";
import { Teste } from "./pages/Home/teste";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
      <Teste />
    </ThemeProvider>
  );
}
