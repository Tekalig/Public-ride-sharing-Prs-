import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  height: "600px",
  width: "100%",
};
const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const RideManagement = ({ ride, onBack }) => {
  const mapColor = useColorModeValue("gray.800", "gray.300");

  return (
    <Box>
      <Box
        p={4}
        borderBottomWidth="1px"
        display="flex"
        alignItems="center"
        justifyContent={"space-between"}
      >
        <IconButton
          aria-label="Back"
          icon={<BsArrowLeft />}
          onClick={onBack}
          variant="ghost"
          size="sm"
        />
        <Heading size="md" ml={2} color={"goldenrod"} margin={10} mb={5}>
          Ride Management
        </Heading>
      </Box>
      <Spacer mb={10} />
      <VStack
        spacing={4}
        alignItems="flex-start"
        m={10}
        p={5}
        color={"green.200"}
      >



        <PassengerDetails passenger={ride.passenger} />
        <Map ride={ride} mapColor={mapColor} />



        <Flex w="100%" justifyContent="space-between">
          <HStack>
            <Button colorScheme="blue" variant="outline">
              Message Passenger
            </Button>
            <Button colorScheme="green">Mark as Arrived</Button>
          </HStack>
          <ReportIssue />
        </Flex>
      </VStack>
    </Box>
  );
};

const PassengerDetails = ({ passenger }) => {
  return (
    <VStack spacing={2} alignItems="flex-start">
      <Heading size="xs" textTransform="uppercase">
        Passenger Details
      </Heading>
      <Text fontWeight="bold">{passenger.name}</Text>
      <Text fontSize="sm">{passenger.phoneNumber}</Text>
      {/* Add in-app messaging option here if needed */}
    </VStack>
  );
};
//        <Map ride={ride} mapColor={mapColor} />
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// const libraries = ["places"];


const Map = ({ ride, mapColor }) => {
  return (


    <LoadScript libraries={libraries}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={ride.pickupLocation} icon={{ url: "/pickup.png" }} />
        <Marker
          position={ride.dropoffLocation}
          icon={{ url: "/dropoff.png" }}
        />



        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: 10,
            backgroundColor: mapColor,
            padding: "5px 10px",
            borderRadius: "5px",
            color: "white",
            fontSize: "12px",
          }}
        >
          Pickup: {ride.pickupLocation.address}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            backgroundColor: mapColor,
            padding: "5px 10px",
            borderRadius: "5px",
            color: "white",
            fontSize: "12px",
          }}
        >
          Dropoff: {ride.dropoffLocation.address}
        </div>
      </GoogleMap>
    </LoadScript>
  );
};

const ReportIssue = () => {
  return (
    <Button colorScheme="red" variant="outline">
      Report Issue
    </Button>
  );
};

export default RideManagement;
