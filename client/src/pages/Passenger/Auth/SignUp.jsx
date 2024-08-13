import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import Topbar from "../../HomePage/components/TopbarComponent/Topbar";
import Footer from "../../HomePage/components/FooterComponent/Footer";
import { useNavigate, Link as ReactRouterLink } from "react-router-dom";

function PassangerRegisterPage() {
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const [error, setError] = useState({});
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  function handleChange(filter, value) {
    setFilters((preValue) => {
      return {
        ...preValue,
        [filter]: value,
      };
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Form validation (dummy example)
    let errors = {};
    if (!filters.name) errors.name = "Name is required";
    if (!filters.email) errors.email = "Email is required";
    if (!filters.password) errors.password = "Password is required";
    if (filters.password !== filters.confirmPassword)
      errors.confirmPassword = "Passwords do not match";
    if (!filters.phoneNumber) errors.phoneNumber = "Phone number is required";

    setError(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch(
          "http://localhost:8081/PassengerRegisterPage",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(filters),
          }
        );
        const data = await response.json();
        // Handle registration success
        localStorage.setItem("token_id", data.token_id);
        navigate("/ride-request"); // Navigate to account page on success
      } catch (error) {
        setError({ server: error.message });
      }
    }
  };

  return (
    <Box>
      <Box mb={70}>
        <Topbar />
      </Box>

      <Box>
        <Box
          bg="blueblack"
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
              Passenger Register
            </Heading>
          </Flex>
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={error.name}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                Name
              </FormLabel>
              <Input
                color={"blue.200"}
                type="text"
                name="name"
                value={filters.name}
                onChange={(event) =>
                  handleChange(event.target.name, event.target.value)
                }
                placeholder="Enter your name"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{error.name}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error.email}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                Email
              </FormLabel>
              <Input
                color={"blue.200"}
                type="email"
                name="email"
                value={filters.email}
                onChange={(event) =>
                  handleChange(event.target.name, event.target.value)
                }
                placeholder="Enter your email"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{error.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error.password}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                Password
              </FormLabel>
              <InputGroup size="md">
                <Input
                  color={"blue.200"}
                  type={show ? "text" : "password"}
                  name="password"
                  value={filters.password}
                  onChange={(event) =>
                    handleChange(event.target.name, event.target.value)
                  }
                  placeholder="Enter your password"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{error.password}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error.confirmPassword}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                Confirm Password
              </FormLabel>
              <InputGroup size="md">
                <Input
                  color={"blue.200"}
                  type={show ? "text" : "password"}
                  name="confirmPassword"
                  value={filters.confirmPassword}
                  onChange={(event) =>
                    handleChange(event.target.name, event.target.value)
                  }
                  placeholder="Re-Enter your password"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{error.confirmPassword}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error.phoneNumber}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                Phone Number
              </FormLabel>
              <Input
                color={"blue.200"}
                type="tel"
                name="phoneNumber"
                value={filters.phoneNumber}
                onChange={(event) =>
                  handleChange(event.target.name, event.target.value)
                }
                placeholder="Enter your phone number"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{error.phoneNumber}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={error.server}>
              <FormErrorMessage>{error.server}</FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="teal" w={"full"} mt={4}>
              Sign Up
            </Button>
          </form>
          <Text mt={4} fontSize="sm" color="gray.600">
            Already Have an account?{" "}
            <ReactRouterLink to={"/passanger-login"} color="teal.500">
              Login
            </ReactRouterLink>
          </Text>
        </Box>
      </Box>

      <Box mb={10} mt={10}>
        <Footer />
      </Box>
    </Box>
  );
}

export default PassangerRegisterPage;
