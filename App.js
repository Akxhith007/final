import Navbar from './Pages/Navbar';
import "./App.css";
import Home from './Pages/Home';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import BusRoute from './Pages/BusRoute';
import Cities from './Pages/Cities';
import Restaurants from './Pages/Restaurants';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route element={<Home/>} path="/Home"/>
          <Route element={<Contact/>} path="/Contact"/>
          <Route element={<Signin/>} path="/Signin"/>
          <Route element={<Signup/>} path="/Signup"/>
          <Route element={<BusRoute/>} path="/BusRoute"/>
          <Route element={<Cities/>} path="/Cities"/>
          <Route element={<Restaurants/>} path="/Restaurants"/>
        </Routes>
      </BrowserRouter>
    </div>    
  );
}

export default App;