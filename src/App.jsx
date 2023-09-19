import { Outlet } from 'react-router-dom'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Cabecalho/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
