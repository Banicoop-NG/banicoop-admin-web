import DashboardLayout from "../../../layout/dashboardLayout";
import BoardContainer from "../../../layout/boardContainer";
import DefaultTable from "../../../components/essentials/defaultTable";
import { Flex, useDisclosure , Box} from "@chakra-ui/react";
import {
  BoardActionButton,
  ExportButton,
} from "../../../components/atoms/buttons";
import ModalLayout from "../../../layout/modalLayout";
import ButtonInterface from "../../../components/essentials/button";
import InputArea from "../../../components/essentials/textInput";

const CellsTableheader = [
  "Customers ",
  "Amount",
  "Receivers Name",
  "Date",
  "Status",
];

const CellsPage = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  const actionButton = (
    <Flex gap="1em" alignItems={"center"}>
      <BoardActionButton onClick={onOpen}>Create New Cell</BoardActionButton>
      <ExportButton onClick={() => alert(0)} />
    </Flex>
  );
  return (
    <>
      <DashboardLayout>
        <BoardContainer title="Transaction Details" section={actionButton}>
          <DefaultTable tableHeader={CellsTableheader}></DefaultTable>
        </BoardContainer>
        <ModalLayout
          isOpen={isOpen}
          onClose={onClose}
          title="Create New Cell"
          description="Enter cell information to continue."
        >
          <form>
            <Box>
              <InputArea type="text" name="Cell name" placeholder="Cell name"/>
              <InputArea type="text" name="Cell name" placeholder="No of Participants "/>
              <InputArea type="text" name="Cell name" placeholder="Contribution Amount"/>
              <InputArea type="text" name="Cell name" placeholder="Duration"/>
            </Box>
            <Flex
              gap="1em"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <ButtonInterface w={["", "250px"]}> Create Cell</ButtonInterface>
              <ButtonInterface
                bg="var(--primary-gray)"
                color="brand.primary"
                onClick={onClose}
              >
                
                Cancel
              </ButtonInterface>
            </Flex>
          </form>
        </ModalLayout>
      </DashboardLayout>
    </>
  );
};
export default CellsPage;
