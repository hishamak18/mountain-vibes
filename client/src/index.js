import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Admin from "./pages/Admin";
import AdminPannel from "./pages/AdminPannel";

import AvailableRooms from "./pages/AvailableRoom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Resevation from "./pages/Resevation";
import SignIn from "./pages/SignIn";
import AvailRooms from "./components/AvailRooms";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={Home} />
          <Route path="/Reservation"Component={Resevation} />
          <Route path="/Admin"Component={Admin} />
          <Route path="/AdminSignInMountain"Component={SignIn} />

          <Route path="/AdminPannel"Component={AdminPannel} />
          <Route path="/AvailRooms"Component={AvailRooms} />

          <Route path="/AvailableRooms"Component={AvailableRooms} />
          <Route path="/Contact"Component={Contact} />
          <Route path="/About"Component={About} />





      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);