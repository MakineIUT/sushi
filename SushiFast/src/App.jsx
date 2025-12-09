import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Outlet /> 
     <Footer />
    </>
  )
}

export default App
