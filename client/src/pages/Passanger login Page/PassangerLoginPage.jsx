/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import Topbar from "../HomePage/components/TopbarComponent/Topbar";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../HomePage/components/FooterComponent/Footer";

const PassangerLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = {};

    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Call API to login passenger
      try {
        const response = await fetch(
          "http://localhost:8081/PassengerLoginPage",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          }
        );
        if (!response.ok) {
          const errorData = await response.json();
          setErrors({ server: errorData.message });
        } else {
          const data = await response.json();
          // Handle login success
          localStorage.setItem("token_id", data.token_id); // Store token_id in localStorage
          navigate("/ride-request"); // Redirect to ride request page
        }
      } catch (error) {
        setErrors({ server: error.message });
      }
    }
  };

  return (
    <Box>
      <Topbar />
      <Box
        bg="goldenrod"
        minH="80vh"
        py={20}
        px={4}
        mx="auto"
        maxW="lg"
        borderRadius="lg"
        boxShadow="md"
        marginTop={50}
      >
        <Flex justify="center" mb={4}>
          <Heading as="h1" size="lg" color="gray.600">
            User Login
          </Heading>
        </Flex>
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel color={"gray.500"} fontWeight={"bolder"}>
              Email
            </FormLabel>
            <Input
              color={"blue.200"}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              _placeholder={{ opacity: 1, color: "gray.500" }}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel color={"gray.500"} fontWeight={"bolder"}>
              Password
            </FormLabel>
            <Input
              color={"blue.200"}
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              _placeholder={{ opacity: 1, color: "gray.500" }}
            />
            {errors.password && (
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            )}
          </FormControl>
          {errors.server && (
            <Box color="red.500" mt={2}>
              {errors.server}
            </Box>
          )}
          <Button type="submit" colorScheme="teal" w={"full"} mt={4}>
            Login
          </Button>
        </form>
        <Text mt={4} fontSize="sm" color="gray.600">
          Don't have an account?{" "}
          <Link to={"/passanger-register"} color="teal.500">
            Register now
          </Link>
        </Text>
      </Box>

      <Box mt={70}>
        <Footer />
      </Box>
    </Box>
  );
};

export default PassangerLoginPage;
