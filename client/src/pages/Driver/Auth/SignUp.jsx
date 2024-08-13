import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import Topbar from "../../HomePage/components/TopbarComponent/Topbar";
import Footer from "../../HomePage/components/FooterComponent/Footer";
import { useNavigate, Link as ReactRouterLink } from "react-router-dom";

function DriverRegisterPage() {
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    driver_license: "",
    license_plate: "",
    car_model: "",
    carYear: "",
    numberOfSite: "",
  });
  const [errors, setErrors] = useState({});

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

    let newErrors = {};
    if (!filters.name) newErrors.name = "Name is required";
    if (!filters.email) newErrors.email = "Email is required";
    if (!filters.password) newErrors.password = "Password is required";
    if (filters.password !== filters.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!filters.driver_license)
      newErrors.driverLicense = "Driver License Number is required";
    if (!filters.license_plate)
      newErrors.licensePlate = "License Plate is required";
    if (!filters.car_model) newErrors.carModel = "Car Model is required";
    if (!filters.carYear) newErrors.carYear = "Car Year is required";
    if (!filters.numberOfSite)
      newErrors.numberOfSite = "Number of Sites is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Call API to register driver
      try {
        const response = await fetch(
          "http://localhost:8081/DriverRegisterPage",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(filters),
          }
        );
        const data = await response.json();
        // Handle registration success
        localStorage.setItem("token_id", data.token_id); // Store token_id in localStorage
        navigate("/driver"); // Navigate to driver page on success
      } catch (error) {
        setErrors({ api: error.message });
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
            <Heading as="h1" size="lg" color="black">
              Driver Register
            </Heading>
          </Flex>
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={errors.name}>
              <FormLabel color={"black"} fontWeight={"bolder"}>
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
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email}>
              <FormLabel color={"black"} fontWeight={"bolder"}>
                Email
              </FormLabel>
              <Input
                color={"blue.200"}
                name="email"
                type="email"
                value={filters.email}
                onChange={(event) =>
                  handleChange(event.target.name, event.target.value)
                }
                placeholder="Enter your email"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel color={"black"} fontWeight={"bolder"}>
                Password
              </FormLabel>
              <InputGroup size="md">
                <Input
                  color={"blue.200"}
                  name="password"
                  type={show ? "text" : "password"}
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
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.confirmPassword}>
              <FormLabel color={"black"} fontWeight={"bolder"}>
                Confirm Your Password
              </FormLabel>
              <InputGroup size="md">
                <Input
                  color={"blue.200"}
                  name="confirmPassword"
                  type={show ? "text" : "password"}
                  value={filters.confirmPassword}
                  onChange={(event) =>
                    handleChange(event.target.name, event.target.value)
                  }
                  placeholder="Re-enter your password"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.driver_license}>
              <FormLabel color={"black"} fontWeight={"bolder"}>
                Your Driver License Number
              </FormLabel>
              <Input
                color={"blue.200"}
                name="driver_license"
                value={filters.driver_license}
                onChange={(event) =>
                  handleChange(event.target.name, event.target.value)
                }
                placeholder="Enter your driver license number"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{errors.driverLicense}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.license_plate}>
              <FormLabel color={"black"} fontWeight={"bolder"}>
                License Plate
              </FormLabel>
              <Input
                color={"blue.200"}
                name="license_plate"
                value={filters.license_plate}
                onChange={(event) =>
                  handleChange(event.target.name, event.target.value)
                }
                placeholder="Enter your license plate"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{errors.licensePlate}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.car_model}>
              <FormLabel color={"black"} fontWeight={"bolder"}>
                Car Model
              </FormLabel>
              <Input
                color={"blue.200"}
                name="car_model"
                value={filters.car_model}
                onChange={(event) =>
                  handleChange(event.target.name, event.target.value)
                }
                placeholder="Enter your car model"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{errors.car_model}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.numberOfSite}>
              <FormLabel color={"black"} fontWeight={"bolder"}>
                Number of Sites
              </FormLabel>
              <Input
                color={"blue.200"}
                name="numberOfSite"
                value={filters.numberOfSite}
                onChange={(event) =>
                  handleChange(event.target.name, event.target.value)
                }
                placeholder="Enter number of sites"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{errors.numberOfSite}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.carYear}>
              <FormLabel color={"black"} fontWeight={"bolder"}>
                Car Year
              </FormLabel>
              <Input
                color={"blue.200"}
                value={filters.carYear}
                name="carYear"
                onChange={(event) =>
                  handleChange(event.target.name, event.target.value)
                }
                placeholder="Enter your car year"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{errors.carYear}</FormErrorMessage>
            </FormControl>

            <Button type="submit" colorScheme="teal" w={"full"} mt={4}>
              Sign Up
            </Button>

            {errors.api && (
              <Box color="red.500" mt={4}>
                {errors.api}
              </Box>
            )}
          </form>
          <Text mt={4} fontSize="sm" color="gray.600">
            Already have an account?{" "}
            <ReactRouterLink to={"/driver-login"} color="teal.500">
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

export default DriverRegisterPage;
