import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './section/navbar'
import Hero from './section/hero'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mx-auto  max-w-7xl">
        <Navbar />
        <Hero />

      </div>
    </>
  )
}

export default App
