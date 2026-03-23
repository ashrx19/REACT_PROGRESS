import Hero, { About } from "./components/Hero"
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<p>404 page found</p>}/>
          <Route path="/" element={<Hero/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<About/>}/>
          <Route path="/skill" element={<Hero/>}/>
        <Route path="/hhhh">



        </Route>

      </Routes>
    
    </BrowserRouter>
      {/* jjj
      <Hero />
      <About />
      <About /> */}
    </>
  )
}

export default App