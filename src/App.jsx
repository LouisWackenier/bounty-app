//PAGES
import Home from './Pages/Home';
import Login from './Pages/Login'; 
import BountySection from './Pages/BountySection';
import Profile from './Pages/Profile';
//COMPONENTS
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
     <Navbar />
      <Home />
      <Login/>
      <BountySection/>
      <Profile/>
     <Footer />
    </>
  )
}

export default App
