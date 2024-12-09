import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Account from "./pages/Account Page/Account";
import Driver from "./pages/Driver App Page/Driver";
import RideRequest from "./pages/Ride Request Page/RideRequest";
import About from "./pages/About us Page/About";
import DriverLogin from "./pages/Driver/Auth/Login";
import DriverRegister from "./pages/Driver/Auth/SignUp";
import PassangerRegister from "./pages/Passenger/Auth/SignUp";
import PassangerLogin from "./pages/Passenger/Auth/Login";
import ActContext from "./context/actContext";
import "./App.css";
import Setting from "./pages/Account Page/Settings component/Setting";
import { useContext } from "react";
import Dashboard from "./pages/Dashboard/dashboard";

function App() {
  const ctx = useContext(ActContext);
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={ctx.isLogin ? <Dashboard /> : <Home />}
          />
          <Route path="/account" element={<Account />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/ride-request" element={<RideRequest />} />
          <Route path="/about" element={<About />} />
          <Route path="/edit" element={<Setting />} />
          <Route path="/driver-login" element={<DriverLogin />} />
          <Route path="/driver-register" element={<DriverRegister />} />
          <Route path="/passanger-register" element={<PassangerRegister />} />
          <Route path="/passanger-login" element={<PassangerLogin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
