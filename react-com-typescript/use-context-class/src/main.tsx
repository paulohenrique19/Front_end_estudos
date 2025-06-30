import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home.tsx';
import Contact from './routes/Contact.tsx';

const router = createBrowserRouter([
  {
    path: "/", //componente base <App />
    element: <App />, //definindo o componente base <App />
    children: [
      {path: "/", element: <Home />}, //caminho e componente
      {path: "/contact", element: <Contact />},
    ]
  }
])

import { ThemeProvider } from './context/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>,
)
