import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IButton extends ButtonProps {
  children: ReactNode;
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

export { DefaultButton };
