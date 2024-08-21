import { Box, Heading, Button } from "@chakra-ui/react";
import Topbar from "../../HomePage/TopbarComponent/Topbar";
import Footer from "../../HomePage/FooterComponent/Footer";
import EditInfo from "./EditInfo";
import Notification from "./Notification";
import Support from "./Support";

const Setting = () => {
  return (
    <>
      <Topbar />
      <Box p={5}>
        <Heading
          as="h2"
          size="lg"
          mb={4}
          border={"none"}
          borderBottom={"solid"}
          borderWidth={1}
        >
          Settings
        </Heading>

        <Box display={"flex"} flexDirection={"column"} gap={10}>
          <EditInfo />
          <Notification />
          <Support />
        </Box>

        <Button colorScheme="blue" variant="solid" size="lg" w={"full"}>
          Save Changes
        </Button>
      </Box>
      <Footer />
    </>
  );
};

export default Setting;
