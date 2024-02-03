import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { ModalTypography } from "../components/atoms/typography";

type TModal = {
  children?: ReactNode;
  isOpen?: any;
  onClose?: any;
  title?: string;
  description?: string;
};
const ModalLayout: FC<TModal> = ({
  isOpen,
  onClose,
  children,
  title,
  description,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          {/* @ts-ignore */}
          <ModalTypography title={title} description={description} />
          <Box py={"1.5em"}>{children}</Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalLayout;
