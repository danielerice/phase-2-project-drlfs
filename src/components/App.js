import React, {useState, useEffect} from 'react';
import { Routes, Route, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Admin from "./Admin";
import About from "./About";
import Menu from "./Menu";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [events, setEvents] = useState([])
  
  useEffect (() => {
    fetch("http://localhost:3000/events")
        .then(response => response.json())
        .then(data => setEvents(data))
    }, []);
  
  return (
    <div className="App">
     <NavBar isLoggedIn={isLoggedIn} setLogin={setIsLoggedIn} />
     <Routes>
      
      <Route path="about" element={
      <About events={events} setEvents={setEvents}/>
      }></Route>
      
      <Route  path="admin" element={
      <Admin events={events} setEvents={setEvents} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      }></Route>
      
      <Route path="menu" element={
      <Menu />
      }></Route>
      
      <Route exact path="/" element={
      <Home />
      }></Route>
    
    </Routes>
    </div>
  );
}

export default App;
