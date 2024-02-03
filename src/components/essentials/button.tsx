import { Button, ButtonProps } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface IButton extends ButtonProps {
  children?: ReactNode;
  width?: string;
  color?: string;
  bg?: string;
  loading?: boolean;
  type?: any;
  withBorder?: boolean;
  onClick?: () => void;
}
const ButtonInterface: FC<IButton> = ({
  width,
  loading,
  color,
  bg,
  onClick,
  type,
  children,
  withBorder,
  ...props
}) => {
  return (
    <Button
      isLoading={loading}
      size={"lg"}
      bg={bg ? bg : "primary.100"}
      w={width}
      color={color ? color : "#fff"}
      onClick={onClick}
      type={type}
      _hover={{}}
      borderRadius={"full"}
      py="1.8em"
      px="2.5em"
      fontSize={"15px"}
      border={withBorder ? "1px solid var(--primary-color) " : "none"}
      {...props}
    >
      {children}
    </Button>
  );
};
export default ButtonInterface;
