import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import About from './pages/About';
import Admin from './pages/Admin';
import AdminPannel from './pages/AdminPannel';
import AvailableRooms from './pages/AvailableRoom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Resevation from './pages/Resevation';
import SignIn from './pages/SignIn';
import AvailRooms from './components/AvailRooms';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Set a timeout to simulate a loading delay
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
    {loading ? (
      <Preloader />
    ) : (
      <BrowserRouter>
      <Routes>
        <Route index Component={Home} />
        <Route path="/Reservation" Component={Resevation} />
        <Route path="/Admin" Component={Admin} />
        <Route path="/AdminSignInMountain" Component={SignIn} />
        <Route path="/AdminPannel" Component={AdminPannel} />
        <Route path="/AvailRooms" Component={AvailRooms} />
        <Route path="/AvailableRooms" Component={AvailableRooms} />
        <Route path="/Contact" Component={Contact} />
        <Route path="/About" Component={About} />
      </Routes>
    </BrowserRouter>
    )}
  </>
   
  );
};

export default App;
