import { Link } from "react-router-dom";
import RideManagement from "../../Driver App Page/components/Ride Management Component/RideMangement"
import Footer from "../../HomePage/components/FooterComponent/Footer"
import Topbar from "../../HomePage/components/TopbarComponent/Topbar"


function Payment() {
  const ride = {
    id: 123,
    passenger: {
      name: "John Doe",
      phoneNumber: "123-456-7890",
    },
    pickupLocation: {
      address: "2QR7+584, King George VI St, Addis Ababa 1000",
      lat: 37.7749,
      lng: -122.4194,
    },
    dropoffLocation: {
      address: "3QP6+8JX, Gulele 19/20/21, Intoto Street, አዲስ አበባ",
      lat: 37.7849,
      lng: -122.4058,
    },
  };

  return (
    <>
    <Topbar/>
    <RideManagement ride = {ride} />
    <Footer/>


    </>
  )
}

export default Payment