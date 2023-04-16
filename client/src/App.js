import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';

const Home = lazy(() => import('./pages/Home'));
const Resevation = lazy(() => import('./pages/Resevation'));
const Admin = lazy(() => import('./pages/Admin'));
const SignIn = lazy(() => import('./pages/SignIn'));
const AdminPannel = lazy(() => import('./pages/AdminPannel'));
const AvailRooms = lazy(() => import('./components/AvailRooms'));
const AvailableRooms = lazy(() => import('./pages/AvailableRoom'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Slider = lazy(() => import('./components/Slider'));

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
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
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
          <Route path="/Slider" Component={Slider} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
