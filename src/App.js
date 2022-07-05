import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home.jsx"
import LandingPage from "./components/LandingPage/LandingPage.jsx"
import Projects from "./components/Projects/Projects.jsx"
import './App.css';


function App() {

  return (



    <div className="App">
    <Routes>
    
      <Route exact path="/" element={<LandingPage/>}/>       
      <Route exact path="/Projects" element={<Projects/>}/> 
      <Route exact path="/Home" element={<Home/>}/> 

      </Routes>
    </div>



  )}

export default App;
