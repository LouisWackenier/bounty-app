//PAGES
import Home from './Pages/Home';
import Login from './Pages/Login'; 
import BountySection from './Pages/BountySection';
import Profile from './Pages/Profile';
//COMPONENTS
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

//REACT ROUTER DOM
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>  
        <Route path="/Login" element={<Login />}/> 
        <Route path="/BountySection" element={<BountySection/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
     <Footer />
    </>
  )
}

export default App
