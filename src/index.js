import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import AvailableRooms from "./pages/AvailableRoom";
import Home from "./pages/Home";
import Resevation from "./pages/Resevation";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={Home} />
          <Route path="/Reservation"Component={Resevation} />
          <Route path="/Admin"Component={Admin} />
          <Route path="/AvailableRooms"Component={AvailableRooms} />


      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);