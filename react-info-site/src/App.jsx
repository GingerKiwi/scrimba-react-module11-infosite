import { useState } from 'react'
// import viteLogo from '/vite.svg'
import Main from './Components/Main.jsx'
import Navbar from './Components/Navbar.jsx'
import './App.css'
import './cssreset.css'
import './styles.css'

export default function App() {
  return (
      <div className="container">
          <Navbar />
          <Main />
      </div>
  )
}

