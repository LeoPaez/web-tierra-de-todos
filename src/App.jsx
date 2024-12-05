import { Route, Routes } from "react-router"
import './App.css'
import Footer from "./components/Footer"
import WhatsappLink from "./components/WhatsappLink"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Cabañas from "./pages/Cabañas"
import Quinchos from "./pages/Quinchos"
import ScrollToTop from "./utils/ScrollToTop"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="cabañas" element={ <Cabañas /> } />
        <Route path="quinchos" element={ <Quinchos /> } />
      </Routes>
      <WhatsappLink />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
