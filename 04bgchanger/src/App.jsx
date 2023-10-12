import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [rang, setRang] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: rang}}
    ></div>
  )
}

export default App
