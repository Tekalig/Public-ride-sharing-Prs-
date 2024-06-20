
import React from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";

const teamMembers = [
  {
    name: "John Doe",
    title: "Transportation Technology Expert",
    image: "https://i.ytimg.com/vi/UrFRreZQwyQ/hqdefault.jpg",
    description: "John has over 10 years of experience in transportation technology, including work on autonomous vehicles and ride-sharing systems.",
  },
  {
    name: "Jane Smith",
    title: "Project Management Specialist",
    image: "https://i.ytimg.com/vi/dMKzGRuWQ_U/maxresdefault.jpg",
    description: "Jane has managed large-scale transportation projects for over 15 years, including work on public transit systems and ride-sharing platforms.",
  },
  {
    name: "Bob Johnson",
    title: "Software Engineer",
    image: "https://i.ytimg.com/vi/YazgW8ZnStw/hqdefault.jpg",
    description: "Bob is an experienced software engineer with a background in full-stack development. He has worked on several ride-sharing projects, including app development and backend infrastructure.",
  },
];

const TeamIntroduction = () => {
  const columnCount = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={40}>
        Our Team
      </Text>
      <SimpleGrid columns={columnCount} spacing={8} mt={10}>
        {teamMembers.map((member, index) => (
          <Grid templateColumns="repeat(2, 1fr)" key={index} gap={4}>
            <GridItem w="100%">
              <Image
                src={member.image}
                alt={`${member.name} headshot`}
                borderRadius="md"
              />
            </GridItem>
            <GridItem w="100%">
              <Text fontSize="xl" fontWeight="bold" mb={2}>
                {member.name}
              </Text>
              <Text fontSize="lg" mb={4} fontWeight={'bold'}>
                {member.title}
              </Text>
              <Text fontSize="md">{member.description}</Text>
            </GridItem>
          </Grid>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TeamIntroduction;