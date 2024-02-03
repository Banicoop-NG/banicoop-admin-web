import { Button, ButtonProps, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ExportIcon } from "../../assets/icons";

interface IButton extends ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const DefaultButton = ({ children, ...rest }: IButton) => {
  return (
    <Button
      borderRadius={"full"}
      px="2em"
      color="brand.primary"
      fontWeight={"light"}
      border={"1px solid var(--shaded-gray)"}
      {...rest}
    >
      {children}
    </Button>
  );
};

const ExportButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <DefaultButton color="brand.primary" py="1.7em" onClick={onClick}>
      <Flex alignItems={"center"} gap=".5em">
        <ExportIcon /> <Text>Export</Text>
      </Flex>
    </DefaultButton>
  );
};

const BoardActionButton = ({ children, onClick }: IButton) => {
  return (
    <DefaultButton color="brand.primary" py="1.7em" onClick={onClick}>
      <Flex alignItems={"center"} gap=".5em">
        <ExportIcon /> <Text>{children}</Text>
      </Flex>
    </DefaultButton>
  );
};

export { DefaultButton, ExportButton, BoardActionButton };
