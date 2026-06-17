import About from "./components/About"
import Hero from "./components/Hero"
import Contact from "./components/Contact"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dummy" element={<p>Empty Page Placeholder</p>} />
     
          <Route path="*" element={<p>404 page found</p>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App