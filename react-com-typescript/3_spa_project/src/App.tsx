import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

import { createContext, useState } from "react";

export const CyclesContext = createContext({} as CyclesContextType)


function App() {
  
  return (
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
         <CyclesContext.Provider>
            <Router />      
          </CyclesContext.Provider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
  );
}

export default App;

