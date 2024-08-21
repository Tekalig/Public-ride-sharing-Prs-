import { Box, Heading, Text, Link } from "@chakra-ui/react";

export default function Support() {
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
  );
}
