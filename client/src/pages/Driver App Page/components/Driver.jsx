import Dashboard from "./Dashboard Component/Dashboard";

import Settings from "./Settings component/Setting";
import Topbar from "../../HomePage/components/TopbarComponent/Topbar";
import Footer from "../../HomePage/components/FooterComponent/Footer";
import RideHistory from "../../Account Page/components/Ride History Component/RideHistory"

function Driver() {
 

  const driver = {  
    name: "John Doe",
    profilePicture: "https://via.placeholder.com/40x40",
  };


  return (
    <>
    <Topbar   />
      <Dashboard />
      <Settings />
      <RideHistory/>
      <Footer />
    </>
  );
}

export default Driver;
