/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactNode, FC } from "react";

type TAuth = {
  children: ReactNode;
  title: string;
};
const AuthLayout: FC<TAuth> = ({ children, title }) => {
  return (
    <Flex flexDir={["column", "column", "row"]}>
      <Box
        w={["100%", "100%", "60%"]}
        h={["30vh", "100vh"]}
        display={{
          sm: "none",
          md: "none",
          lg: "block",
        }}
        bgPos={""}
        bgSize={"contain"}
      >
        <Box h={"100%"} bg={"primary.100"}></Box>
      </Box>
      <Box
        w={["100%", "100%", "30%"]}
        mx={"auto"}
        py={"2em"}
        px={["1.5em", "2em"]}
      >
        {/* <Box
          w={{
            sm: "80%",
            md: "80%",
            lg: "90px",
          }}
          h={"90px"}
          mt={"2em"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          backgroundPosition={"center"}
          backgroundSize={"contain"}
          bgPos={"center"}
          background={'primary.100'}
        ></Box> */}
        <img src="/assets/icons/bannicoop-logo.svg" width="100" />
        {children}
      </Box>
    </Flex>
  );
};
export default AuthLayout;
