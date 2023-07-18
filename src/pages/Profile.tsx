import {
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import {
  EmailIcon,
  ChatIcon,
  StarIcon,
  WarningIcon,
  CheckCircleIcon,
} from "@chakra-ui/icons";

export default function Profile() {
  return (
    <Tabs colorScheme="puple" p="10px" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: mario@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Insert mode indentation: In insert mode, you don’t need to escape
              to normal mode to change indentation.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Paste in insert mode: Sometimes you want this because escaping to
              normal mode and pasting will have a different result (for example,
              the newline autoindent will be lost.)
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              In insert mode, you don't need to escape to normal mode to change
              indentation.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              In insert mode, you don't need to escape to normal mode to change
              indentation.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
