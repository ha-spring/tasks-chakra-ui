import Tasks from "../../data/db.json";
import {
  Avatar,
  SimpleGrid,
  Card,
  Divider,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Text,
  Box,
  Heading,
  HStack,
  Button,
} from "@chakra-ui/react";
import { ViewIcon, EditIcon } from "@chakra-ui/icons";

export default function Dashboard() {
  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {Tasks.tasks &&
        Tasks.tasks.map((task) => (
          <Card
            key={task.id}
            borderTop="8px"
            borderColor="purple.400"
            bg="white"
          >
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img} />
                <Box>
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color="gray.500">
              <Text>{task.description}</Text>
            </CardBody>
            <Divider borderColor="gray.200" />
            <CardFooter>
              <HStack>
                <Button variant="goast" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="goast" leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}
