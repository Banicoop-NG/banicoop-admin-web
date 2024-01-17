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
    <Flex flexDir={["column", "column","column" ,"row"]}>
      <Box
        w={["100%", "100%","100%" , "40%"]}
        h={["30vh", "100vh"]}
        display={["none" , "none" , "none" , "block"]}
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
    
        <img src="/assets/icons/bannicoop-logo.svg" width="100" />
        {children}
      </Box>
    </Flex>
  );
};
export default AuthLayout;
