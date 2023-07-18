import {
  Avatar,
  AvatarBadge,
  Flex,
  Heading,
  Spacer,
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
        <Avatar>
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs">3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>mario@gmail.com</Text>
        <Button colorScheme="purple" onClick={clickHandler}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}
