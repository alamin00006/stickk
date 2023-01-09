
import './App.css';
import Navbar from './Dashboard/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import SideHome from './Dashboard/SideNavbar/SideHome';
import Notification from './Dashboard/SideNavbar/Notification';
import Friends from './Dashboard/SideNavbar/Friends/Friends';
import Commitment from './Dashboard/SideNavbar/Commitment/Commitment';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/sideHome' element={<SideHome></SideHome>}></Route>
        <Route path='/notification' element={<Notification></Notification>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/commitment' element={<Commitment></Commitment>}></Route>
      </Routes>
    </div>
  );
}

export default App;
