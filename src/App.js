import logo from './logo.svg';
import './App.css';
import './Assets/sass/style.scss'
import Header from './Components/Header';
import Crypto from './Components/Crypto';
import Private from './Components/Private';
import Advantages from './Components/Advantages';
import Transaction from './Components/Transaction';
import Affordable from './Components/Affordable';
import Team from './Components/Team';
import Media from './Components/Media';
import Donate from './Components/Donate';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
