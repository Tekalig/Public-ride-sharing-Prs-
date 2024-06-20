/* eslint-disable react/prop-types */
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  List,
  ListItem,
  Avatar,
  Spacer,
  useColorModeValue,
  VStack,
  HStack,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const RideRequests = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const [filters, setFilters] = useState({
    s_address: "",
    d_address: "",
    no_site: "",
  });
  const [requests, setRideRequests] = useState([]);
  const fetchRideRequests = async () => {
    try {
      const response = await fetch("http://localhost:8081/ride-request");
      if (!response.ok) {
        throw new Error("Failed to fetch ride requests");
      }
      const data = await response.json();
      setRideRequests(data);
    } catch (error) {
      console.error("Error fetching ride requests:", error);
    }
  };

  useEffect(() => {
    fetchRideRequests();
  }, []);

  const handleStatus = async (requestId, status) => {
    try {
      await fetch(
        "http://localhost:8081/ride-requests-deletes",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ requestId: requestId, status: status }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete ride request");
      }

      // Fetch the updated data and set it as the new value for 'requests'
      fetchRideRequests();
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilterChange = (filter, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filter]: value }));
  };

  // eslint-disable-next-line react/prop-types
  const filteredRideRequest = requests.filter((request) => {
    if (filters.no_site && request.no_site < filters.no_site) return false;
    if (filters.s_address && request.s_address !== filters.s_address)
      return false;
    if (filters.d_address && request.d_address !== filters.d_address)
      return false;
    return true;
  });

  return (
    <Box
      p={4}
      bg={bgColor}
      borderRadius="lg"
      boxShadow="md"
      backgroundColor={"goldenrod"}
      textAlign={"center"}
      m={10}
    >
      <Heading
        as="h2"
        size="lg"
        mb={4}
        w={"100%"}
        backgroundColor={"blue.200"}
        p={2}
        borderRadius={10}
      >
        Ride Requests
      </Heading>

      {/* filter section  */}

      <Box p={10}>
        <VStack spacing={4}>
          <Text
            fontSize={"large"}
            color={"dark"}
            textAlign={"center"}
            backgroundColor={"blue.200"}
            borderRadius={"50%"}
            p={5}
            fontWeight={"bolder"}
          >
            Filter by
          </Text>
          <HStack spacing={6}>
            <Select
              value={filters.no_site}
              onChange={(e) => handleFilterChange("no_site", e.target.value)}
              placeholder="Number of Passengers"
              backgroundColor={"blue.300"}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>
            <Select
              value={filters.s_address}
              onChange={(e) => handleFilterChange("s_address", e.target.value)}
              placeholder="starting address"
              backgroundColor={"blue.300"}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>


            <Select
              value={filters.d_address}
              onChange={(e) => handleFilterChange("d_address", e.target.value)}
              placeholder="Destination"
              backgroundColor={"blue.300"}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>
          </HStack>
        </VStack>
      </Box>

      {filteredRideRequest && (
        <List spacing={4}>
          {filteredRideRequest.map((request) => (
            <ListItem
              key={request.id}
              border={"dotted"}
              borderColor={"black"}
              p={2}
            >
              <Flex alignItems="center">
                <Avatar
                  size="sm"
                  name={request.passengerName}
                  src={request.passengerPhoto}
                />
                <Spacer />
                <Box>
                  <Text fontWeight="bold">{request.passangerName}</Text>
                  <Text>
                    {request.s_address} To {request.d_address}{" "}
                  </Text>
                  <Text>
                    {request.no_site}{" "}
                    {request.no_site > 1 ? "passengers" : "passenger"}
                  </Text>
                </Box>
                <Spacer />
                <Box>
                  <Button
                    colorScheme="green"
                    variant="solid"
                    size="sm"
                    mr={2}
                    // eslint-disable-next-line no-undef
                    onClick={() => handleStatus(request.id, "accepted")}
                  >
                    Accept
                  </Button>
                  <Button
                    colorScheme="red"
                    variant="solid"
                    size="sm"
                    // eslint-disable-next-line no-undef
                    onClick={() => handleStatus(request.id, "declined")}
                  >
                    Decline
                  </Button>
                </Box>
              </Flex>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default RideRequests;
