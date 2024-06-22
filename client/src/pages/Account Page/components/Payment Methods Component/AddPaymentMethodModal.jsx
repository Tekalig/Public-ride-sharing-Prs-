import { useState } from "react";
import {
  Box,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const AddPaymentMethodModal = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [cvc, setCVC] = useState("");

  return (
    <Box mb={10}>
      <Text fontSize="lg" fontWeight="bold">
        Add Payment Method
      </Text>
      <FormControl mt="4">
        <FormLabel>Card Number</FormLabel>
        <Input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </FormControl>
      <FormControl
        mt="4"
        display="flex"
        justifyContent="space-between"
        flexWrap={"wrap"}
      >
        <Box>
          <FormLabel>Expiration Date</FormLabel>
          <Input
            type="text"
            value={expirationMonth}
            onChange={(e) => setExpirationMonth(e.target.value)}
          />
        </Box>
        <Box>
          <FormLabel>CVC</FormLabel>
          <Input
            type="text"
            value={cvc}
            onChange={(e) => setCVC(e.target.value)}
          />
        </Box>
      </FormControl>
      <Button
        mt="4"
        colorScheme="blue"
        isDisabled={!cardNumber || !expirationMonth || !cvc}
      >
        Add Payment Method
      </Button>
    </Box>
  );
};

export default AddPaymentMethodModal;
// function PasswordInput() {
//   const [show, setShow] = useState(false)
//   const handleClick = () => setShow(!show)

//   return (
//     <InputGroup size='md'>
//       <Input
//         pr='4.5rem'
//         type={show ? 'text' : 'password'}
//         placeholder='Enter password'
//       />
//       <InputRightElement width='4.5rem'>
//         <Button h='1.75rem' size='sm' onClick={handleClick}>
//           {show ? 'Hide' : 'Show'}
//         </Button>
//       </InputRightElement>
//     </InputGroup>
//   )
// }
