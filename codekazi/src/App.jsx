import About from "./components/About"
import  Navbar from"./components/Navbar"
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Testimony from "./components/Testimony"


function App() {

  return (
    <div>
      
      <Navbar />
      <Home />
      <About />
      <Services/>
      <Portfolio/>
      <Testimony/>
      <Contact/>

    </div>

  )
}

export default App;
