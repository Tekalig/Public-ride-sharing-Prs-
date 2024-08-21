import {
  Box,
  Flex,
  Icon,
  Text,
  ListItem,
  List,
  VStack,
} from "@chakra-ui/react";
import {
  MdCommute,
  MdNature,
  MdPeople,
  MdSmsFailed,
  MdLocalParking,
  MdLocationCity,
} from "react-icons/md";

function Benefit() {
  return (
    <Box py={12} px={4} maxW="xxl" mx="auto">
      <Flex justify="space-between" mb={8} fontSize={21}>
        <VStack>
          <Box m={10}>
            <Box mb={7}>
              <Text fontWeight="bold" fontSize={24}>
                Employee Benefits
              </Text>
            </Box>
            <Box w="100%">
              <List spacing={4}>
                <ListItem>
                  <Icon as={MdCommute} color="orange.500" mr={2} />
                  <Text>Reduced commute time and cost</Text>
                </ListItem>
                <ListItem>
                  <Icon as={MdNature} color="red.500" mr={2} />
                  <Text>Environmental impact reduction</Text>
                </ListItem>
                <ListItem>
                  <Icon as={MdPeople} color="green.500" mr={2} />
                  <Text>Social interaction with colleagues</Text>
                </ListItem>
              </List>
            </Box>
          </Box>
        </VStack>

        <VStack>
          <Box ml={100}>
            <Box m={7}>
              <Text fontSize={24} fontWeight="bold">
                Company Benefits
              </Text>
            </Box>
            <Box w="100%">
              <List spacing={4}>
                <ListItem>
                  <Icon as={MdSmsFailed} color="orange.500" mr={2} />
                  <Text>Improved employee satisfaction</Text>
                </ListItem>
                <ListItem>
                  <Icon as={MdLocalParking} color="red.500" mr={2} />
                  <Text>Reduced parking needs</Text>
                </ListItem>
                <ListItem>
                  <Icon as={MdLocationCity} color="green.500" mr={2} />
                  <Text>Contribution to a sustainable city</Text>
                </ListItem>
              </List>
            </Box>
          </Box>
        </VStack>
      </Flex>
      <Flex justify="space-between"></Flex>
    </Box>
  );
}

export default Benefit;
