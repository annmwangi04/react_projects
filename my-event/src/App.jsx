import Navbar from "./components/Navbar";
import Agenda from "./components/Agenda";
import Registration from "./components/Registration"
import Speakers from "./components/Speakers";
import Contact from "./components/Contact";


function App() {

  return (
    <div>
      
      <Navbar />
      <Agenda />
      <Speakers/>
      <Registration/>
      <Contact/>

    </div>

  )
}

export default App;
