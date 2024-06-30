import {
  Box,
  Heading,
  Text,
  FormLabel,
  FormControl,
  Input,
  Select,
  Checkbox,
  Button,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";

const Setting = () => {
  const [profile, setProfile] = useState({
    name: "",
    photo: "",
    vehicleDetails: "",
  });
  const [notificationPreferences, setNotificationPreferences] = useState({
    sound: true,
    vibration: true,
  });
  const [vehicleInformation, setVehicleInformation] = useState({
    make: "",
    model: "",
    licensePlate: "",
  });

  const handleProfileChange = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };

  const handleNotificationChange = (event) => {
    setNotificationPreferences({
      ...notificationPreferences,
      [event.target.name]: event.target.checked,
    });
  };

  const handleVehicleChange = (event) => {
    setVehicleInformation({
      ...vehicleInformation,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box p={14} bg="black.200" boxShadow="md" text>
      <Heading as="h2" size="lg" mb={4}>
        Settings
      </Heading>

      <Box display={"flex"} padding={10}>
        <Box ml={4} border={"ridge"} p={10} borderRadius={10}>
          <Heading as="h3" size="md" mb={2}>
            Profile Information
          </Heading>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Photo</FormLabel>
            <Input
              type="file"
              name="photo"
              value={profile.photo}
              onChange={handleProfileChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Vehicle Details</FormLabel>
            <Input
              type="text"
              name="vehicleDetails"
              value={profile.vehicleDetails}
              onChange={handleProfileChange}
            />
          </FormControl>
        </Box>

        <Box ml={4} border={"ridge"} p={10} borderRadius={10}>
          <Heading as="h3" size="md" mb={2}>
            Notification Preferences
          </Heading>
          <FormControl display="flex" alignItems="center">
            <Checkbox
              name="sound"
              isChecked={notificationPreferences.sound}
              onChange={handleNotificationChange}
            >
              Sound
            </Checkbox>
          </FormControl>
          <FormControl display="flex" alignItems="center">
            <Checkbox
              name="vibration"
              isChecked={notificationPreferences.vibration}
              onChange={handleNotificationChange}
            >
              Vibration
            </Checkbox>
          </FormControl>
        </Box>

        <Box ml={4} border={"ridge"} p={10} borderRadius={10}>
          <Heading as="h3" size="md" mb={2}>
            Vehicle Information
          </Heading>
          <FormControl isRequired>
            <FormLabel>Make</FormLabel>
            <Select
              name="make"
              value={vehicleInformation.make}
              onChange={handleVehicleChange}
            >
              <option value="">Select Make</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Ford">Ford</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Model</FormLabel>
            <Input
              type="text"
              name="model"
              value={vehicleInformation.model}
              onChange={handleVehicleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>License Plate</FormLabel>
            <Input
              type="text"
              name="licensePlate"
              value={vehicleInformation.licensePlate}
              onChange={handleVehicleChange}
            />
          </FormControl>
        </Box>

        <Box ml={4} border={"ridge"} p={10} borderRadius={10}>
          <Heading as="h3" size="md" mb={2}>
            Support Resources
          </Heading>
          <Text>
            <Link href="#" color="blue.500">
              FAQs
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Contact Us
            </Link>
          </Text>
        </Box>
      </Box>

      <Button colorScheme="blue" variant="solid" size="lg" w="full">
        Save Changes
      </Button>
    </Box>
  );
};

export default Setting;
