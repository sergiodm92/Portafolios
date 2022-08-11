import { Route, Routes} from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage.jsx"
import Home from "./components/Home/Home.jsx"
import Projects from "./components/Projects/Projects.jsx"
import Contact from './components/Contact/Contact.jsx';
import Skills from './components/Skills/Skills.jsx';
import SoftSk from './components/SoftSkills/softSkills.jsx'
import Aboutme from './components/Aboutme/Aboutme.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
    
    <Routes>

      <Route exact path="/" element={<LandingPage/>}/>       
      <Route exact path="/Projects" element={<Projects/>}/> 
      <Route exact path="/Home" element={<Home/>}/> 
      <Route exact path="/Skills" element={<Skills/>}/>
      <Route exact path="/SoftSk" element={<SoftSk/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
      <Route exact path="/Aboutme" element={<Aboutme/>}/>
      </Routes>
    </div>
  )
}

export default App;
