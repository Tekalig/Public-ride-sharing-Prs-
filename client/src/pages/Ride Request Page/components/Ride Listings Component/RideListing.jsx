import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  Button,
  Select,
  Checkbox,
  VStack,
  HStack,
  Badge,
  SimpleGrid,
  useBreakpointValue,
  Spacer,
  FormControl, // Add this line
  FormLabel, // Add this line
  Input, // Add this line
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  FaCar,
  FaChair,
  FaRoad,
  FaMapMarker,
  FaLandmark,
} from "react-icons/fa";
import Confirmation from "../Confirmation Component/Confirmation";

const RideListing = () => {
  const [select, setSelect] = useState(false);
  const [filters, setFilters] = useState({
    s_address: "",
    d_address: "",
    no_site: "",
    car_model: "",
    smooking: "No",
    music: "No",
    pet: "No",
  });

  const [rideListings, setRideListings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/ride-listings")
      .then((res) => res.json())
      .then((data) => setRideListings(data))
      .catch((err) => console.error(err));
  }, []);

  const handleclick = () => {
    setSelect(!select);
  };

  const handleFilterChange = (filter, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: value,
    }));
  };

  const filteredRideListings = rideListings.filter((ride) => {
    if (filters.s_address && ride.s_address !== filters.s_address) return false;
    if (filters.d_address && ride.d_address !== filters.d_address) return false;
    if (filters.no_site && ride.no_site < filters.no_site) return false;
    if (filters.car_model && ride.car_model !== filters.car_model) return false;
    if (filters.smooking !== "No" && ride.smoking !== filters.smooking)
      return false;
    if (filters.music !== "No" && ride.music !== filters.music) return false;
    if (filters.pet !== "No" && ride.pet_friendly !== filters.pet) return false;
    return true;
  });

  const columnCount = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <>
      <Box w={"70%"} ml={"25%"} p={20}>
        <Box>
          <FormControl mb={4}>
            <FormLabel htmlFor="origin">Origin</FormLabel>
            <Box display="flex" alignItems="center">
              <FaMapMarker size={50} />
              <Input
                id="origin"
                type="text"
                placeholder="Enter origin address"
                mr={6}
                flexGrow={1}
                ml={6}
              />
            </Box>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="destination">Destination</FormLabel>
            <Box display={"flex"} alignItems={"center"}>
              <FaLandmark size={50} />
              <Input
                id="destination"
                type="text"
                placeholder="Enter destination address"
                mr={2}
                ml={5}
              />{" "}
            </Box>
          </FormControl>
          <Button
            colorScheme="blue"
            onClick={() => {
              handleFilterChange(
                "s_address",
                document.getElementById("origin").value
              );
              handleFilterChange(
                "d_address",
                document.getElementById("destination").value
              );
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
      <Box w={"100%"} p={10}>
        {/* Filter section */}
        <VStack mb={4}>
          <Text
            fontSize={20}
            mb={12}
            p={5}
            color={"black"}
            backgroundColor={"goldenrod"}
            w={"100%"}
            fontWeight={"bold"}
            textAlign={"center"}
            fontStyle={"initial"}
            borderRadius={10}
          >
            Filter by
          </Text>
          <Spacer />
          <HStack spacing={24}>
            <Select
              value={filters.numSeats}
              onChange={(e) => handleFilterChange("no_site", e.target.value)}
              placeholder="Number of seats"
              backgroundColor={"blue.300"}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>
            <Select
              value={filters.carType}
              onChange={(e) => handleFilterChange("car_model", e.target.value)}
              placeholder="Car Model"
              backgroundColor={"blue.300"}
            >
              <option value="Toyota Prius">Toyota Prius</option>
              <option value="Honda Accord">Honda Accord</option>
              <option value="Ford Focus">Ford Focus</option>
            </Select>
            <HStack spacing={8}>
              <Checkbox
                value={filters.smooking === "Yes" ? "Yes" : "No"}
                onChange={(e) =>
                  handleFilterChange(
                    "smooking",
                    e.target.value === "Yes" ? "No" : "Yes"
                  )
                }
              >
                Smoking
              </Checkbox>
              <Checkbox
                value={filters.music === "Yes" ? "Yes" : "No"}
                onChange={(e) =>
                  handleFilterChange(
                    "music",
                    e.target.value === "Yes" ? "No" : "Yes"
                  )
                }
              >
                Music
              </Checkbox>
              <Checkbox
                value={filters.pet === "Yes" ? "Yes" : "No"}
                onChange={(e) =>
                  handleFilterChange(
                    "pet",
                    e.target.value === "Yes" ? "No" : "Yes"
                  )
                }
              >
                Pet-friendly
              </Checkbox>
            </HStack>
          </HStack>
        </VStack>

        {/* Ride listings section */}
        {select && <Confirmation />}

        <SimpleGrid columns={columnCount} spacing={18} mt={10}>
          {filteredRideListings.map((ride, index) => (
            <Grid templateColumns="repeat(1, 1fr)" gap={14} key={index}>
              <GridItem key={ride.id} p={10}>
                <Flex
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mb={2}
                >
                  <Text fontSize="lg" fontWeight="bold" ml={2}>
                    {ride.username}
                  </Text>
                  <Badge
                    variant="outline"
                    colorScheme="green"
                    fontSize="sm"
                    ml={2}
                  >
                    {ride.license_plate}
                  </Badge>
                </Flex>
                <Box color={"goldenrod"} fontWeight={"bolder"}>
                  <Box display={"flex"} alignItems={"center"}>
                    <FaRoad />
                    <Text fontSize="md" mb={2} ml={2}>
                      {ride.s_address} → {ride.d_address}
                    </Text>
                  </Box>

                  <Box display={"flex"} alignItems={"center"}>
                    <FaCar />
                    {ride.car_model && (
                      <Text fontSize="md" mb={2} ml={2}>
                        Vehicle: {ride.car_model}
                      </Text>
                    )}
                  </Box>

                  <Box display={"flex"} alignItems={"center"}>
                    <FaChair />
                    <Text fontSize="md" mb={2} ml={2}>
                      Number of seats available: {ride.no_site}
                    </Text>
                  </Box>
                </Box>

                <Text
                  fontSize="md"
                  mb={2}
                  color={"goldenrod"}
                  fontWeight={"bolder"}
                >
                  Smoking:{" "}
                  <Badge
                    key={index}
                    variant="outline"
                    colorScheme="gray"
                    mr={1}
                  >
                    {ride.smoking}
                  </Badge>
                </Text>
                <Text
                  fontSize="md"
                  mb={2}
                  color={"goldenrod"}
                  fontWeight={"bolder"}
                >
                  Music:{" "}
                  <Badge
                    key={index}
                    variant="outline"
                    colorScheme="gray"
                    mr={1}
                  >
                    {ride.music}
                  </Badge>
                </Text>
                <Text
                  fontSize="md"
                  mb={2}
                  color={"goldenrod"}
                  fontWeight={"bolder"}
                >
                  Pet-Frendly:{" "}
                  <Badge
                    key={index}
                    variant="outline"
                    colorScheme="gray"
                    mr={1}
                  >
                    {ride.pet_friendly}
                  </Badge>
                </Text>
                <Button
                  colorScheme="blue"
                  variant="solid"
                  size="sm"
                  w="100%"
                  mb={4}
                  onClick={handleclick}
                >
                  Select
                </Button>
              </GridItem>
            </Grid>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default RideListing;
