/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import {
  Box,
  Text,
  Flex,
  Center,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";
import { MenuContent } from "../essentials/menuContents";
import { AiOutlinePoweroff } from "react-icons/ai";
import ModalLayout from "../../layout/modalLayout";
import ButtonInterface from "../essentials/button";
import { toast } from "react-toastify";
import { useState } from "react";

const DashboardSidebar = () => {
  return (
    <Box
      h={"100vh"}
      bg={"#fff"}
      w={"300px"}
      color={"black"}
      py={".5em"}
      position={"sticky"}
      top={0}
      bottom={0}
      left={0}
      zIndex={1}
      borderRight={"1px solid var(--shaded-gray)"}
    >
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
        h={"90vh"}
        px={"1em"}
      >
        <Flex flexDir={"column"} gap={"1em"}>
          <MenuContent />
        </Flex>
      </Flex>

      <Flex
        gap=".5em"
        borderTop={"1px solid var(--shaded-gray)"}
        py="2em"
        px="2em"
      >
        <Avatar />
        <Box>
          <Text fontWeight={"medium"}>Praise Dominic</Text>
          <Text fontSize={"13px"}>Admin ID: 0011232</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardSidebar;
