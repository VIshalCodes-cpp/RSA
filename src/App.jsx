import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Hero from './HeroSection'
import Encrypt from './Encrypt'
import Decrypt from './Decryot'
import Footer from './footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-[#000005] h-full'>
    <Navbar/>
    <Hero/>
    <Encrypt />
    <Decrypt />
    <Footer/>
    </div>
 
  
    </>
  )
}

export default App
