import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from './components/Navbar'
import './App.css'

import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const [count, setCount] = useState(0)

  const { theme } = useContext(ThemeContext)

  return (
    <>
      <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App
