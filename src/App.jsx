import Home from './pages/Home'
import Privacy from './pages/Privacy'
import PressKit from './pages/PressKit'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/press" element={<PressKit />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
