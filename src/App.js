import './App.css';
import Home from './Components/Page/Home/Home';
import Navbar from './Components/Page/Dashboard/Navbar/DeshNavbar'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< Home/>}/>
        <Route path="/Home" element={< Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
