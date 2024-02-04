/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import {
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { SidebarItems } from "../../utils/sidebarItems";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { DefaultLogo } from "../atoms/dashboard/logo";
import { AccountSidebarItem } from "../../utils/sidebarItems";
import ModalLayout from "../../layout/modalLayout";
import ButtonInterface from "./button";
import Cookies from "js-cookie";

export const MenuContent = () => {
  const getPath = window.location.pathname;
  const activeState = {
    bg: "#6922D10A",
    padding: " 1em 2em ",
    borderRadius: "100px",
    cursor: "pointer",
  };
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = index => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const closeModal = () => {
    onClose();
    setLoader(false);
  };

  const logOut = () => {
    setTimeout(() => {
      window.location.reload();
      Cookies.remove("_accessToken");
      window.location.href = "/";
    }, 2000);
  };

  return (
    <>
      <Box my="2em">
        <DefaultLogo />
      </Box>

      <Text color={"gray.600"}>Menu</Text>
      {SidebarItems.map(({ name, icon, path, menu }, index) => {
        const isMenuOpen = activeMenu === index;
        const isActive = getPath === path;
        return (
          <Box key={index} position="relative" ml=".5em">
            <Link to={path}>
              <Box
                gap={"1em"}
                display={"flex"}
                alignItems={"center"}
                my={"1em"}
                px="1em"
                sx={getPath === path ? activeState : "none"}
              >
                {icon}
                <Text fontSize={"18px"} color={isActive && "primary.100"}>
                  {name}
                </Text>
              </Box>
            </Link>
          </Box>
        );
      })}

      <Text color={"gray.600"} fontSize={"12px"} my={"1.6em"}>
        ACCOUNT
      </Text>
      {AccountSidebarItem?.map(({ name, icon, path, menu }, index) => {
        const isMenuOpen = activeMenu === index;
        const isActive = getPath === path;
        return (
          <Box key={index} position="relative" ml=".5em">
            <Link to={path}>
              <Box
                gap={"1em"}
                display={"flex"}
                alignItems={"center"}
                my={"1em"}
                px="1em"
                sx={getPath === path ? activeState : "none"}
                onClick={
                  name.toLocaleLowerCase() === "logout" ? () => onOpen() : null
                }
              >
                {icon}
                <Text fontSize={"18px"} color={isActive && "primary.100"}>
                  {name}
                </Text>
              </Box>
            </Link>
          </Box>
        );
      })}

      <ModalLayout isOpen={isOpen} onClose={onClose} textAlign={"center"}>
        <Box textAlign={"center"}>
          <Text fontWeight={"bold"} fontSize={"1.3em"}>
            Do you want to continue ?
          </Text>
          <Text>By clicking continue will log you out</Text>
          <Flex w={"100%"} gap={"1em"} mt={"1.5em"} justifyContent={"center"}>
            <ButtonInterface
              w={"100%"}
              _hover={{}}
              bg={"gray.100"}
              color="black"
              onClick={closeModal}
            >
              Cancel
            </ButtonInterface>
            <ButtonInterface w={"100%"} onClick={logOut}>
              Continue
            </ButtonInterface>
          </Flex>
        </Box>
      </ModalLayout>
    </>
  );
};
