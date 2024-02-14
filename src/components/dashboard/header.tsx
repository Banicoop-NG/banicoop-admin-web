import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

import DrawerLayout from "../../layout/draweerLayout";
import { MenuContent } from "../essentials/menuContents";
import { useDisclosure } from "@chakra-ui/react";
import { FilledBellIcon, FilledMessageIcon } from "../../assets/icons";
import { useSelector } from "react-redux";


const DashboardHeader = () => {
  const { isOpen, onClose } = useDisclosure();
  const state = useSelector((state) => {state})
  
  return (
    <Box
      px={"2em"}
      w={"100%"}
      py={"2em"}
      borderBottom={"1px solid var(--shaded-gray)"}
    >
      <Flex
        justifyContent={"space-between"}
        px={{
          sm: "",
          md: "",
          lg: "3em",
        }}
      >
        <Box>
          <Text fontWeight={"semibold"}>Dashboard OVerview</Text>
        </Box>

        {/* <Box
          bg="#FAFAFA"
          px="1.5em"
          borderRadius={"20px"}
          display={"flex"}
          alignItems={"center"}
          gap="1em"
        >
          <SearchIcon />
          <Input
            type="search"
            placeholder="search"
            border={"none"}
            outline={"none"}
          />
        </Box> */}

        <Box display={"flex"} alignItems={"center"} gap="1em">
          <Box display={"flex"} alignItems={"center"} gap={"1em"}>
            <FilledBellIcon />
            <FilledMessageIcon />
          </Box>
          <Flex gap=".5em">
            <Avatar />
            <Box>
              <Text fontWeight={"medium"}>Praise Dominic</Text>
              <Text>Admin ID: 0011232</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <DrawerLayout
        size={"full"}
        placement={"left"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <MenuContent />
      </DrawerLayout>
    </Box>
  );
};
export default DashboardHeader;
