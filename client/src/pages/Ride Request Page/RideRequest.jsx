import "./rideRequest.css";
import RideListing from "./Ride Listings Component/RideListing";
import Topbar from "../HomePage/TopbarComponent/Topbar";
import Footer from "../HomePage/FooterComponent/Footer";

function RideRequest() {
  return (
    <>
      <Topbar />
      <RideListing />
      {/* <RideBooking/> */}
      <Footer />
    </>
  );
}

export default RideRequest;
