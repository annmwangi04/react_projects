import About from "./components/About"
import  Navbar from"./components/Navbar"
import BlogList from "./components/Bloglist"
import WizardForm from "./components/WizardForm"

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <BlogList/>
      <WizardForm/>

    </div>

  )
}

export default App 