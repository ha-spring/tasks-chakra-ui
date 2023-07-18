import {
  Flex,
  Heading,
  Spacer,
  Box,
  Text,
  Button,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { UnlockIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const toast = useToast();

  const clickHandler = () => {
    toast({
      title: "Logged out",
      description: "Successufully logged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon />,
    });
  };

  return (
    <Flex as="nav" p="10px" marginBottom="40px" alignItems="center">
      <Heading as="h1">Tasks</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>mario@gmail.com</Text>
        <Button colorScheme="purple" onClick={clickHandler}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}
