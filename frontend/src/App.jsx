import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from "react-router-dom"
import { CallbackPage } from './pages/callback-page'
import { HomePage } from './pages/homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/callback' element={<CallbackPage />} />
    </Routes>
  )
}

export default App
