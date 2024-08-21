import { Box, Heading, FormLabel, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
export default function EditInfo() {
  const [profile, setProfile] = useState({
    name: "",
    photo: "",
    vehicleDetails: "",
  });
  const handleProfileChange = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };
  return (
    <Box ml={4} p={10}>
      <Heading
        as="h3"
        size="md"
        mb={2}
        border={"none"}
        borderBottom={"solid"}
        borderWidth={1}
      >
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
    </Box>
  );
}
