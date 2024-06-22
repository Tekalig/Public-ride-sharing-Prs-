import { Box, Heading, Text, Center, HStack } from "@chakra-ui/react";
import AddPaymentMethodModal from "./AddPaymentMethodModal";
import { FaCcMastercard, FaCcVisa, FaPaypal } from "react-icons/fa";

const PaymentMethods = () => {
  return (
    <Box w={"50%"} position={"center"} margin={"auto"} mt={100}>
      <Center>
        <Box mb={100}>
          <Heading size="lg" mb={4} p={10} color={"goldenrod"}>
            Payment Methods
          </Heading>
          <HStack spacing={4}>
            <FaPaypal size={50} />
            <FaCcMastercard size={50} />
            <FaCcVisa size={50} />
          </HStack>
        </Box>

        <Text m={1}>
          Manage your payment options. View and manage your existing payment
          methods, add new payment methods, and set a default payment method for
          future rides.
        </Text>
      </Center>
      <AddPaymentMethodModal />
    </Box>
  );
};

export default PaymentMethods;
