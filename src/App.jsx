import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './section/navbar'
import Hero from './section/hero'
import About from './section/about'
import Projects from './section/project'
import Experiences from './section/experiences'
import Testimonial from './section/testimonial'
import Contact from './section/contact'
import Footer from './section/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mx-auto  max-w-7xl">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
