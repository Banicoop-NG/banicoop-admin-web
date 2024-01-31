import { Box, Text, Input, Flex } from "@chakra-ui/react";

import { FC, ReactNode } from "react";
import { SearchIcon } from "../assets/icons";
import { DefaultButton } from "../components/atoms/buttons";

const INFOICON = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.99976 16.5001C13.1419 16.5001 16.4998 13.1422 16.4998 9.00006C16.4998 4.85793 13.1419 1.50006 8.99976 1.50006C4.85762 1.50006 1.49976 4.85793 1.49976 9.00006C1.49976 13.1422 4.85762 16.5001 8.99976 16.5001Z"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 6.00006V9.00006"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="8.99976" cy="12" r="0.75" fill="black" />
  </svg>
);

const EXPORTICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M8.66675 7.3333L14.1334 1.86664"
      stroke="#6922D1"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.6666 4.53331V1.33331H11.4666"
      stroke="#6922D1"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.33325 1.33331H5.99992C2.66659 1.33331 1.33325 2.66665 1.33325 5.99998V9.99998C1.33325 13.3333 2.66659 14.6666 5.99992 14.6666H9.99992C13.3333 14.6666 14.6666 13.3333 14.6666 9.99998V8.66665"
      stroke="#6922D1"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

interface IBoaradContainer {
  children?: ReactNode;
  title?: string;
}

const BoardContainer: FC<IBoaradContainer> = ({ children, title }) => {
  return (
    <Box
      py="2em"
      px="2em"
      border={"1px solid var(--shaded-gray)"}
      borderRadius={"10px"}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box display={"flex"} alignItems={"center"} gap=".5em">
          <Text>{title}</Text>
          {INFOICON}
        </Box>

        <Flex gap="1em">
          <Box
            bg="#FAFAFA"
            px="1.5em"
            py=".3em"
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
          </Box>

          <Box>
            <DefaultButton color="brand.primary" py="1.7em">
              <Flex alignItems={"center"} gap=".5em">
                {EXPORTICON} <Text>Export</Text>
              </Flex>
            </DefaultButton>
          </Box>
        </Flex>
      </Flex>

      <Box my="1em">{children}</Box>
    </Box>
  );
};

export default BoardContainer;
