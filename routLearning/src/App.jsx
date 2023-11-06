import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Now i am leraning my react babby</h1>
    </>
  )
}

export default App
