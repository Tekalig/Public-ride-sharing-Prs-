import {
  Box,
  Flex,
  Heading,
  Text,
  Switch,
  Button,
  Card,
  Image,
  Stack,
  CardBody,
  CardFooter,
  Center,
  HStack,
} from "@chakra-ui/react";
import { FaHandPointRight, FaStar } from "react-icons/fa";
import RideRequest from "../RideRequestCompnent/RideRequests";
import { useState } from "react";

const Dashboard = () => {
  const earnings = {
    daily: "$100.00",
    weekly: "$500.00",
  };
  const [isOnline, setIsOnline] = useState(true);

  const handleToggleOnlineStatus = () => {
    setIsOnline(!isOnline);
  };

  return (
    <Box
      p={4}
      borderRadius="lg"
      boxShadow="md"
      textAlign={"center"}
      padding={20}
    >
      <Flex
        justify="space-between"
        align="center"
        alignItems={"center"}
        mb={14}
        justifyContent={"space-around"}
        p={5}
        backgroundColor={"goldenrod"}
        borderRadius={10}
      >
        <Heading as="h2" size="lg">
          Driver Dashboard
        </Heading>
        <Switch
          size="lg"
          isChecked={isOnline}
          onChange={handleToggleOnlineStatus}
        >
          {isOnline ? "Online" : "Offline"}
        </Switch>
      </Flex>
      <Box>
        <Heading
          color={"green.200"}
          p={10}
          display={"flex"}
          alignItems={"center"}
        >
          <FaHandPointRight size={100} />
          &quot;Help People Get Where They Need to Go. Be a Part of the
          Community.&quot;
        </Heading>
      </Box>

      <Box mb={4} mt={15}>
        <Center>
          <Box>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody>
                  <Heading as="h3" size="lg" color={"goldenrod"} p={10}>
                    your Earnings Summary
                  </Heading>

                  <Text py="2">
                    <Text>
                      Daily: {earnings.daily}
                      <br />
                      Weekly: {earnings.weekly}
                    </Text>
                  </Text>
                </CardBody>

                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    <HStack>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </HStack>
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          </Box>
        </Center>
      </Box>
      {isOnline && <RideRequest />}
    </Box>
  );
};

export default Dashboard;
