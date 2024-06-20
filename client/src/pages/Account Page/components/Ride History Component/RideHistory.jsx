import { useEffect, useState } from "react";
import {
  Box,
  Text,
  Heading,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Select,
  HStack,
  Center,
} from "@chakra-ui/react";

const RideHistory = () => {
  const [rideHistory, setRideHistory] = useState([]);
  useEffect(() => {
    const fetchRideHistory = async () => {
      try {
        const response = await fetch("http://localhost:8081/ride-history");
        if (!response.ok) {
          throw new Error("Failed to fetch ride history");
        }
        const data = await response.json();
        setRideHistory(data);
      } catch (error) {
        console.error("Error fetching ride history:", error);
      }
    };

    fetchRideHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [filterDateRange, setFilterDateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const [filterPaymentMethod, setFilterPaymentMethod] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const filterRides = (rides) => {
    let filteredRides = rides;

    // Filter by date range
    if (filterDateRange.startDate || filterDateRange.endDate) {
      filteredRides = filteredRides.filter((ride) => {
        const rideDate = new Date(ride.travel_date);
        const startDate = filterDateRange.startDate
          ? new Date(filterDateRange.startDate)
          : null;
        const endDate = filterDateRange.endDate
          ? new Date(filterDateRange.endDate)
          : null;

        if (startDate && rideDate < startDate) {
          return false;
        }

        if (endDate && rideDate > endDate) {
          return false;
        }

        return true;
      });
    }

    // Filter by payment method
    if (filterPaymentMethod) {
      filteredRides = filteredRides.filter(
        (ride) => ride.paymentMethod === filterPaymentMethod
      );
    }

    return filteredRides;
  };

  const sortRides = (rides) => {
    if (!sortBy) {
      return rides;
    }

    return [...rides].sort((a, b) => {
      if (sortBy === "date") {
        return new Date(a.date) - new Date(b.date);
      }

      if (sortBy === "fare") {
        return (
          parseFloat(a.fare.replace("$", "")) -
          parseFloat(b.fare.replace("$", ""))
        );
      }

      return 0;
    });
  };
  const filteredAndSortedRides = sortRides(filterRides(rideHistory));

  return (
    <Box p={14} borderBlock={"Background"} mb={10} borderRadius={10}>
      <Center>
        <Heading as="h1" size="lg" mb={4} color={"goldenrod"} p={10}>
          Ride History
        </Heading>
      </Center>

      <HStack spacing={10} justifyContent={"space-between"} p={10}>
        <Box mb={4}>
          <Text fontWeight="bold">Filter by Date Range:</Text>
          <Box display="flex" mt={2}>
            <Input
              type="date"
              placeholder="Start Date"
              onChange={(e) =>
                setFilterDateRange({
                  ...filterDateRange,
                  startDate: e.target.value,
                })
              }
            />
            <Input
              type="date"
              placeholder="End Date"
              ml={2}
              onChange={(e) =>
                setFilterDateRange({
                  ...filterDateRange,
                  endDate: e.target.value,
                })
              }
            />
          </Box>
        </Box>

        <Box mb={4}>
          <Text fontWeight="bold">Filter by Payment Method:</Text>
          <Select
            placeholder="Select Payment Method"
            mt={2}
            onChange={(e) => setFilterPaymentMethod(e.target.value)}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Cash">Cash</option>
          </Select>
        </Box>
      </HStack>


      <Box mb={4}>
        <Text fontWeight="bold">Sort by:</Text>
        <Select
          placeholder="Select Sort Option"
          mt={2}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date">Date</option>
          <option value="fare">Fare</option>
        </Select>
      </Box>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Ride Id</Th>
              <Th>Pickup</Th>
              <Th>Dropoff</Th>
              <Th>Coustomer</Th>
              <Th>Car</Th>
              <Th>A mount</Th>
              <Th>Payment Method</Th>
              <Th>Status</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredAndSortedRides.map((ride, index) => (
              <Tr key={index}>
                <Td>{ride.ride_id}</Td>
                <Td>{ride.s_address}</Td>
                <Td>{ride.d_address}</Td>
                <Td>{ride.username}</Td>
                <Td>{ride.car}</Td>
                <Td>{ride.fare}</Td>
                <Td>{ride.paymentMethod}</Td>
                <Td>{ride.status}</Td>
                <Td>{ride.travel_date}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RideHistory;
