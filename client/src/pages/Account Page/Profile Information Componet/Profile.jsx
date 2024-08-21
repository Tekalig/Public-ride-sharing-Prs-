import { useContext, useEffect, useState } from "react";

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
import ActContext from "../../../context/actContext";

const Profile = () => {
  const [info, setInfo] = useState([{}]);
  const ctx = useContext(ActContext);

  useEffect(() => {
    fetch("http://localhost:8081/user/6")
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((err) => console.error(err));
  }, []);
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
                {info[0].user_name}
              </Text>
              <Box display={"flex"} alignItems={"center"}>
                <FaMailBulk size={30} />
                <Text ml={5} fontSize="md">
                  {info[0].email}
                </Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <FaPhone size={30} />

                <Text ml={50} fontSize="md">
                  {info[0].phone_number}
                </Text>
              </Box>
              <Link to={"/edit"}>
                <Button colorScheme="green" mt={10}>
                  Edit Profile
                </Button>
              </Link>
              <Link to={"/"}>
                <Button
                  colorScheme="red"
                  mt={10}
                  onClick={() => {
                    ctx.handleLogin();
                    ctx.setTokenId();
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
