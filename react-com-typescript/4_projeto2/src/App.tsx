// src/App.tsx
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from "./Router";
import { defaultTheme } from "./styles/themes/default";
import { CartProvider } from './contexts/CartContext'; // Importe o CartProvider

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider> {/* Envolva a aplicação com o CartProvider */}
          <Router />
        </CartProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
