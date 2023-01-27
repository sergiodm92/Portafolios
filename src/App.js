import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Skills from "./components/Skills/Skills.jsx";
import SoftSk from "./components/SoftSkills/softSkills.jsx";
import Aboutme from "./components/Aboutme/Aboutme.jsx";
import Home from "./components/Home/Home.jsx";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/Projects" element={<Projects />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Skills" element={<Skills />} />
        <Route exact path="/SoftSk" element={<SoftSk />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Aboutme" element={<Aboutme />} />
      </Routes>
    </div>
  );
}

export default App;
