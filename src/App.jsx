import { Routes, Route } from 'react-router-dom'
import '@fontsource/geist-sans'
import '@fontsource/geist-mono'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Navbar from './components/Navbar'
import Home from '../src/pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Works from './pages/Works'
import Contact from './pages/Contact'
import ThankYou from './components/ThankYou'
import Footer from './components/Footer'
import "../src/styles/Home.module.css"

function App() {
  const baseUrl = import.meta.env.VITE_BASE_URL || '';
  
  return (
    <>
      <Navbar />
      <div style={{ padding: "40px" }}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;