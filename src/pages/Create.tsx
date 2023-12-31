import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
    <Box maxWidth="480px" p="10px">
      <Form method="post" action="/create">
        <FormControl isRequired marginBottom="40px">
          <FormLabel>Task name:</FormLabel>
          <Input type="text" name="title" bg="white" />
          <FormHelperText>Enter a descriptive task name.</FormHelperText>
        </FormControl>

        <FormControl marginBottom="40px">
          <FormLabel>Task description:</FormLabel>
          <Textarea
            placeholder="Enter a detailed description for the task..."
            name="description"
            bg="white"
          />
        </FormControl>

        <FormControl display="flex" alignItems="center" marginBottom="40px">
          <Checkbox
            name="isPriority"
            size="lg"
            colorScheme="purple"
            bg="white"
          />
          <FormLabel marginBottom="0" marginLeft="10px">
            Make this a priority task.
          </FormLabel>
        </FormControl>

        <Button type="submit">Submit</Button>
      </Form>
    </Box>
  );
}

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };

  console.log(task);

  return redirect("/");
};
