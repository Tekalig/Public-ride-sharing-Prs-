import { Box, Text, Button, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Confirmation = () => {

  return (
    <Center w={"50%"}>
      <Box
        w="100%"
        p={14}
        bg="green.50"
        borderRadius="md"
        boxShadow="md"
        mb={4}
      >
        
        <Text fontSize="lg" fontWeight="bold" color="green.800">
          You have selected you dirver . Please wait...
        </Text>

        <Link to={"/payment"}>
          <Button colorScheme="blue" variant="solid" size="sm" w="100%" mt={2}>
            Proceed
          </Button>
        </Link>
      </Box>
    </Center>
  );
};

export default Confirmation;
