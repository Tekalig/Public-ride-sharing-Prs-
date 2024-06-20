import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <Box boxSize="lg" mt={20}>
        <HStack spacing={20}>
          <Image src="src/assets/bacground.jpg" alt="Dan Abramov" />
          <Text fontSize="xl" mt={5}>
            <Heading as="h1" size="2xl" color="green">
              ራይድ ኢትዮጵያ
            </Heading>
            <Text fontSize="xl" mt={5}>
              ካሉበት ወደ ሚፈልጉት የስራ መረጃ የሚለውን የራይዋን አገልግሎት በማስገባት እና በማስተዋወቅ እንዲሁም
              በማስታወቅ የሚሰጥ እና የሚሰራ አገልግሎት ነው።
            </Text>
          </Text>
        </HStack>
        <ButtonGroup variant="outline" spacing="6">
          <Link to={"/driver-login"}>
            <Button colorScheme="green" borderColor={"none"}>
              {" "}
              ለሹፍርና በዚህ ይግብ{" "}
            </Button>
          </Link>
          <Link to={"/passanger-login"}>
            <Button colorScheme="green" borderColor={"none"}>
              ለተሳፋሪ በዚሁ ይግቡ{" "}
            </Button>
          </Link>
        </ButtonGroup>
      </Box>
    </div>
  );
}

export default Hero;
