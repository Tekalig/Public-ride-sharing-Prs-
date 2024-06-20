
import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import { FaHistory } from 'react-icons/fa';

const story = () => {
  return (
    <Box m={100}>
      <Heading size="lg" mb={4} textAlign={'center'} fontFamily={'initial'}>
        Our Story
      </Heading>
      <Box display={'flex'} alignItems={'center'}>
      <FaHistory size={500}/>
      <Text fontSize="md" fontWeight={'bolder'} ml={10}>
        Our ride-sharing program was born out of a desire to make transportation more accessible and convenient for everyone. We were inspired by the idea of creating a community where people could share rides and reduce their carbon footprint.

        Since our launch, we've helped thousands of people get from point A to point B, and we're proud to be a part of the movement towards sustainable transportation.
      </Text>
      </Box>
    </Box>
  );
};

export default story;
