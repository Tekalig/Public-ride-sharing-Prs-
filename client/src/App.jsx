import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/components/Home";
import Account from "./pages/Account Page/components/Account";
import Driver from "./pages/Driver App Page/components/Driver";
import Payment from "./pages/Payment Page/components/Payment";
import RideRequest from "./pages/Ride Request Page/components/RideRequest";
import About from "./pages/About us Page/components/About";
import RideManagement from "./pages/Driver App Page/components/Ride Management Component/RideMangement";
import DriverLoginPage from "./pages/Driver login page/DriverLoginPage";
import DriverRegisterPage from "./pages/Driver login page/DriverRegisterPage";
import PassangerRegisterPage from "./pages/Passanger login Page/PassangerRegisterPage";
import PassangerLoginPage from "./pages/Passanger login Page/PassangerLoginPage";

function App() {
  return (
    <div className="appContainer">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/ride-request" element={<RideRequest />} />
          <Route path="/about" element={<About />} />
          <Route path="/driver-login" element={<DriverLoginPage />} />
          <Route path="/driver-register" element={<DriverRegisterPage />} />
          <Route path="/passanger-register" element={<PassangerRegisterPage />} />
          <Route path="/passanger-login" element={<PassangerLoginPage />} />
          

          <Route path="/ride-management" element={<RideManagement />} />

          {/* You can add more routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
