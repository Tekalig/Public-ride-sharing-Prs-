import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

// Sample data
const samplePaymentMethod = {
  cardtype: 'Visa',
  last4: '1234',
  expirationMonth: '12',
  expirationYear: '2025',
};

const PaymentMethodCard = () => {
  const onRemove = () => {
    // Handle remove logic here
  };

  const onSetDefault = () => {
    // Handle set default logic here
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      padding="4"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb="4"
    >
      <Box>
        <Text fontWeight="bold">{samplePaymentMethod.cardtype} ending in {samplePaymentMethod.last4}</Text>
        <Text fontSize="sm" color="gray.500">
          Expires {samplePaymentMethod.expirationMonth}/{samplePaymentMethod.expirationYear}
        </Text>
      </Box>
      <Box>
        {/* You can decide whether this payment method is default or not */}
        {/* <Text fontSize="sm" color="green.500">Default</Text> */}
        <Button size="xs" variant="outline" onClick={onSetDefault} ml="2">
          Set Default
        </Button>
        <Button size="xs" variant="outline" onClick={onRemove} ml="2">
          Remove
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentMethodCard;