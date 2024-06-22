import {
  Box,
  Text,
  Heading,
  VStack,
  Avatar,
  Center,
  Card,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaMailBulk, FaPhone } from "react-icons/fa";

const Profile = () => {
  return (
    <Box>
      <Center>
        <Card m={10} w={"60%"} borderRadius={15} backgroundColor={"blue.200"}>
          <VStack p={10}>
            <Heading size="lg" mb={29} mt={10}>
              Profile Information
            </Heading>
            <VStack
              spacing={4}
              alignItems="center"
              mt={20}
              mb={20}
              fontWeight={"bolder"}
              fontFamily={"initial"}
              color={"goldenrod"}
            >
              <Avatar size="xl" src="https://bit.ly/sage-adebayo" />
              <Text fontSize="md" fontWeight="bold" mb={10}>
                John Doe
              </Text>
              <Box display={"flex"} alignItems={"center"}>
                <FaMailBulk size={30} />
                <Text ml={5} fontSize="md">
                  johndoe@example.com
                </Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <FaPhone size={30} />

                <Text ml={50} fontSize="md">
                  +1 (123) 456-7890
                </Text>
              </Box>
              <Button colorScheme="green" mt={10}>
                Edit Profile
              </Button>
              <Link to={"/"}>
                <Button
                  colorScheme="red"
                  mt={10}
                  onClick={() => {
                    localStorage.setItem("token_id", null);
                  }}
                >
                  Login Out
                </Button>
              </Link>
            </VStack>
          </VStack>
        </Card>
      </Center>
    </Box>
  );
};

export default Profile;
