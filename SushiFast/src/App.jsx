import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Panier from './component/Panier'
import { Outlet } from 'react-router-dom'
import { PanierProvider } from './context/PanierContext'

function App() {
  return (
    <PanierProvider>
      <Header />
      <Panier />
      <Outlet /> 
      <Footer />
    </PanierProvider>
  )
}

export default App
