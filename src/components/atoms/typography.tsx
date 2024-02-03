import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

interface ITypohraphy {
  title: string;
  description: string;
}

const ModalTypography: FC<ITypohraphy> = ({
  title,
  description,
}: ITypohraphy) => {
  return (
    <Box>
      <Text fontSize={"17px"} fontWeight={"semibold"}>
        {title}{" "}
      </Text>
      <Text fontSize={"15px"} fontWeight={300}>
        {description}
      </Text>
    </Box>
  );
};

export { ModalTypography };
