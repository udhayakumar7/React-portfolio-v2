
import './App.css';
import Home from './pages/Home';
import "locomotive-scroll/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import ShowCase from './pages/ShowCase';

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>

    <Routes>
      <Route path='/' index element={  <Home />} />
      <Route path='/about' index element={  <About />} />
      <Route path='/show-case' index element={  <ShowCase />} />

    </Routes>
    
   
 
  
    </>
  )
}

export default App
