import './App.css'
import Footer from './Component/Footer/Footer'
import Navbar from './Component/Navbar/Navbar'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Portfolio from './Pages/Portfolio/Portfolio'

function App() {


  return (
  <div>
   <Navbar />
   <Portfolio/>
   <About />
   <Contact />
   <Footer />
  </div>
  )
}

export default App
