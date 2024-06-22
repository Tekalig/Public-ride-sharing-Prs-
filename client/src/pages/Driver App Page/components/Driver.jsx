import Dashboard from "./Dashboard Component/Dashboard";
import Topbar from "../../HomePage/components/TopbarComponent/Topbar";
import Footer from "../../HomePage/components/FooterComponent/Footer";
import RideHistory from "../../Account Page/components/Ride History Component/RideHistory";

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
