import { useState } from "react";
import { Box, Heading, FormControl, Checkbox } from "@chakra-ui/react";
function Notification() {
  const [notificationPreferences, setNotificationPreferences] = useState({
    sound: true,
    vibration: true,
  });

  const handleNotificationChange = (event) => {
    setNotificationPreferences({
      ...notificationPreferences,
      [event.target.name]: event.target.checked,
    });
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
  );
}

export default Notification;
