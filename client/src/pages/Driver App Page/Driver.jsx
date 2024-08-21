import Dashboard from "./Dashboard Component/Dashboard";
import Topbar from "../HomePage/TopbarComponent/Topbar";
import Footer from "../HomePage/FooterComponent/Footer";
import RideHistory from "../Account Page/Ride History Component/RideHistory";

function Driver() {
  return (
    <>
      <Topbar />
      <Dashboard />
      <RideHistory />
      <Footer />
    </>
  );
}

export default Driver;
