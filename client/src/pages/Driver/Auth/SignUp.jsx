import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import Topbar from "../HomePage/components/TopbarComponent/Topbar";
import Footer from "../HomePage/components/FooterComponent/Footer";
import { useNavigate, Link as ReactRouterLink } from "react-router-dom";

function DriverRegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [driver_license, setdriver_license] = useState("");
  const [license_plate, setlicense_plate] = useState("");
  const [car_model, setcar_model] = useState("");
  const [carYear, setCarYear] = useState("");
  const [numberOfSite, setnumberOfSite] = useState("");
  const [smoking, setSmoking] = useState(false);
  const [music, setMusic] = useState(false);
  const [petFriendly, setPetFriendly] = useState(false);
  const [errors, setErrors] = useState({});

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    let newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!driver_license)
      newErrors.driverLicense = "Driver License Number is required";
    if (!license_plate) newErrors.licensePlate = "License Plate is required";
    if (!car_model) newErrors.carModel = "Car Model is required";
    if (!carYear) newErrors.carYear = "Car Year is required";
    if (!numberOfSite) newErrors.numberOfSite = "Number of Sites is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Call API to register driver
      try {
        const response = await fetch(
          "http://localhost:8081/DriverRegisterPage",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              email,
              password,
              driver_license,
              license_plate,
              car_model,
              carYear,
              numberOfSite,
              preferences: {
                smoking: smoking ? "Yes" : "No",
                music: music ? "Yes" : "No",
                pet_friendly: petFriendly ? "Yes" : "No",
              },
            }),
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
            <Heading as="h1" size="lg" color="gray.600">
              Driver Register
            </Heading>
          </Flex>
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={errors.name}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                Name
              </FormLabel>
              <Input
                color={"blue.200"}
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email}>
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
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                Password
              </FormLabel>
              <InputGroup size="md">
                <Input
                  color={"blue.200"}
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
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
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                Confirm Your Password
              </FormLabel>
              <InputGroup size="md">
                <Input
                  color={"blue.200"}
                  type={show ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
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
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                Your Driver License Number
              </FormLabel>
              <Input
                color={"blue.200"}
                value={driver_license}
                onChange={(event) => setdriver_license(event.target.value)}
                placeholder="Enter your driver license number"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{errors.driverLicense}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.license_plate}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                License Plate
              </FormLabel>
              <Input
                color={"blue.200"}
                value={license_plate}
                onChange={(event) => setlicense_plate(event.target.value)}
                placeholder="Enter your license plate"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{errors.licensePlate}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.car_model}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                Car Model
              </FormLabel>
              <Input
                color={"blue.200"}
                value={car_model}
                onChange={(event) => setcar_model(event.target.value)}
                placeholder="Enter your car model"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{errors.car_model}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.numberOfSite}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                Number of Sites
              </FormLabel>
              <Input
                color={"blue.200"}
                value={numberOfSite}
                onChange={(event) => setnumberOfSite(event.target.value)}
                placeholder="Enter number of sites"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{errors.numberOfSite}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.carYear}>
              <FormLabel color={"gray.500"} fontWeight={"bolder"}>
                Car Year
              </FormLabel>
              <Input
                color={"blue.200"}
                value={carYear}
                onChange={(event) => setCarYear(event.target.value)}
                placeholder="Enter your car year"
                _placeholder={{ opacity: 1, color: "gray.500" }}
              />
              <FormErrorMessage>{errors.carYear}</FormErrorMessage>
            </FormControl>

            <HStack spacing={8}>
              <Checkbox
                isChecked={smoking}
                onChange={(e) => setSmoking(e.target.checked)}
              >
                Non-smoking
              </Checkbox>
              <Checkbox
                isChecked={music}
                onChange={(e) => setMusic(e.target.checked)}
              >
                No music
              </Checkbox>
              <Checkbox
                isChecked={petFriendly}
                onChange={(e) => setPetFriendly(e.target.checked)}
              >
                Pet-friendly
              </Checkbox>
            </HStack>

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
