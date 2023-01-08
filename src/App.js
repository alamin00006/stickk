import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Page/Home/Home';
import HowItWorks from './Components/Page/How-It-Works/HowItWorks';
import HelpCenter from './Components/Page/HelpCenter/HelpCenter';
import Register from './Components/Page/Register/Register';
import SignIn from './Components/Page/SignIn/SignIn';
import AboutUs from './Components/Page/AboutUs/AboutUs';
import Navbar from './Components/Page/Home/Navbar';
import Footer from './Components/Page/Home/Footer';



function App() {
  return (
    <div>
        <Navbar></Navbar>
      <Routes>
        <Route path="/" element={< Home/>}/>
        <Route path="/home" element={< Home/>}/>
        <Route path="/home/HowItWorks" element={< HowItWorks/>}/>
        <Route path="/home/AboutUs" element={< AboutUs/>}/>
        <Route path="/home/HelpCenter" element={< HelpCenter/>}/>
        <Route path="/SignIn" element={< SignIn/>}/>
        <Route path="/Register" element={< Register/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
