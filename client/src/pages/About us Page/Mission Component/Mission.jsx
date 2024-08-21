import { Box, Text, Heading, HStack, Center } from "@chakra-ui/react";
import { FaBullhorn, FaCamera } from "react-icons/fa";

const Mission = () => {
  return (
    <Box p={14} m={10}>
      <Center>
        <Heading size="lg" mb={24}>
          Our Mission and Vision
        </Heading>
      </Center>
      <HStack spacing={8} alignItems="flex-start" mt={10} mb={10}>
        <Box p={10}>
          <Text fontSize="lg" fontWeight="bold" mb={2} textAlign={"center"}>
            Mission Statement
          </Text>
          <Box display={"flex"} alignItems={"center"}>
            <FaBullhorn size={"sm"} />
            <Text fontSize="md" fontWeight={"bolder"} display={"flex"} m={10}>
              Our mission is to revolutionize employee commutes in Ethiopia by
              providing a convenient, cost-effective, and eco-friendly
              ride-sharing platform.
            </Text>
          </Box>
        </Box>
        <Box p={10}>
          <Text fontSize="lg" fontWeight="bold" mb={2} textAlign={"center"}>
            Vision Statement
          </Text>
          <Box display={"flex"} alignItems={"center"}>
            <FaCamera size={"sm"} />
            <Text m={10} fontSize="md" fontWeight={"bolder"}>
              We envision a future where Ethiopian cities are less congested,
              the environment is cleaner, and employees enjoy a stress-free
              commute experience.
            </Text>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default Mission;
