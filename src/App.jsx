import './App.css'
import Home from './landing_Page/homes/Home.jsx'
import About from './landing_Page/about/About.jsx'
import PricingPage from './landing_Page/pricing/PricingPage.jsx'
import ProductPage from './landing_Page/products/ProductPage.jsx'
import Signup from './landing_Page/signup/Signup.jsx'
import SupportPage from './landing_Page/support/SupportPage.jsx'
import { Routes, Route } from "react-router-dom"
import Navbar from './landing_Page/Navbar.jsx'
import Footer from './landing_Page/Footer.jsx'
import NotFound from './landing_Page/NotFound.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<SupportPage />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
