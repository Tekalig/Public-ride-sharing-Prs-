import { Flex, Box } from "@chakra-ui/react";
import { GoogleMap } from "@react-google-maps/api";
import Topbar from "../HomePage/TopbarComponent/Topbar";
import Footer from "../HomePage/FooterComponent/Footer";

const center = { lat: 19.322, lng: 11.4 };
function Dashboard() {
  return (
    <>
      <Topbar />
      <Flex h={"90vh"} w={"100vw"}>
        <Box h={"100%"} w={"100%"}>
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
          ></GoogleMap>
        </Box>
      </Flex>
      <Footer />
    </>
  );
}

export default Dashboard;
