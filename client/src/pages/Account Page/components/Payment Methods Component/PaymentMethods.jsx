import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  useDisclosure,
  Center,
  HStack,
} from "@chakra-ui/react";
import PaymentMethodCard from "./PaymentMethodCard";
import AddPaymentMethodModal from "./AddPaymentMethodModal";
import { FaCcMastercard, FaCcVisa, FaPaypal } from "react-icons/fa";

const PaymentMethods = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

        <Text m={10}>
          Manage your payment options. View and manage your existing payment
          methods, add new payment methods, and set a default payment method for
          future rides.
        </Text>
      </Center>
      <AddPaymentMethodModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default PaymentMethods;
