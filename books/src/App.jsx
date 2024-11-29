import React from "react"
import Home from './components/Home'
import ReadingList from "./components/ReadingList";
import Contact from "./components/Contact";
import SearchBooks from "./components/Books";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <SearchBooks/>
    <ReadingList/>
    <Contact/>
    </>
   
  
  );
}
export default App