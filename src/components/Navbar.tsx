import {
  Flex,
  Heading,
  Spacer,
  Box,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" marginBottom="40px" alignItems="center">
      <Heading as="h1">Tasks</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>mario@gmail.com</Text>
        <Button>Logout</Button>
      </HStack>
    </Flex>
  );
}
