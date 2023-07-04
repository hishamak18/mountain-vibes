import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import "../src/style.css";
const Home = lazy(() => import("./pages/Home"));
const Reservation = lazy(() => import("./pages/Reservation"));
const Admin = lazy(() => import("./pages/Admin"));
const SignIn = lazy(() => import("./pages/SignIn"));
const AdminPanel = lazy(() => import("./pages/AdminPanel"));
const AvailRooms = lazy(() => import("./components/AvailRooms"));
const AvailableRooms = lazy(() => import("./pages/AvailableRoom"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));

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
          <Route path="/Reservation" Component={Reservation} />
          <Route path="/Admin" Component={Admin} />
          <Route path="/AdminSignInMountain" Component={SignIn} />
          <Route path="/AdminPanel" Component={AdminPanel} />
          <Route path="/AvailRooms" Component={AvailRooms} />
          <Route path="/AvailableRooms" Component={AvailableRooms} />
          <Route path="/Contact" Component={Contact} />
          <Route path="/About" Component={About} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
