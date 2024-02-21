//@ts-nocheck
import DashboardLayout from "../../../layout/dashboardLayout";
import BoardContainer from "../../../layout/boardContainer";
import DefaultTable from "../../../components/essentials/defaultTable";
import { Flex, useDisclosure, Box, Tr, Td } from "@chakra-ui/react";
import {
  BoardActionButton,
  ExportButton,
} from "../../../components/atoms/buttons";
import ModalLayout from "../../../layout/modalLayout";
import ButtonInterface from "../../../components/essentials/button";
import InputArea from "../../../components/essentials/textInput";
import { useFormik } from "formik";
import { createContributionSchema } from "../../../validations";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../config/axios";
import { postRequest } from "../../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import moment from "moment";

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

  const payload = {
    contributionName: "",
    monthlyAmount: "",
    startDate: "",
    totalServer: "",
    participants: "",
  };

  const formik = useFormik({
    initialValues: payload,
    validateOnChange: true,
    validationSchema: createContributionSchema,
    onSubmit: async values => {
      const parsedValues = {
        ...values,
        monthlyAmount: parseInt(values.monthlyAmount, 10),
        participants: parseInt(values.participants, 10),
        totalServer: parseInt(values.totalServer, 10),
      };

      postRequest({
        url: "/contribution",
        body: parsedValues,
        successMsg: "Contribution created successfully",
      });
    },
  });

  const [searchValue, setSearchValue] = useState<string>("");
  const getCells = async () => {
    const request: AxiosResponse = await axiosInstance.get("/contribution");
    return request?.data?.payload;
  };
  const { data } = useQuery({
    queryKey: ["customers"],
    queryFn: getCells,
  });

  const filterItem = data?.filter((value: string) => {
    if (value !== "" || value !== null) {
      return value;
    } else {
      return value === searchValue.trim().toLocaleLowerCase();
    }
  });

  return (
    <>
      <DashboardLayout>
        <BoardContainer title="Contributions Details" section={actionButton}>
          <DefaultTable tableHeader={CellsTableheader}>
            {filterItem?.map((_, key: number) => {
              return (
                <Tr key={key}>
                  <Td>{key + 1}</Td>
                  <Td>{_?.contributionName}</Td>
                  <Td>{_?.monthlyAmount}</Td>
                  <Td>{_?.monthlyOutput}</Td>
                  <Td>{moment(_?.startDate).format("MMMM Do YY")}</Td>
                </Tr>
              );
            })}
          </DefaultTable>
        </BoardContainer>
        <ModalLayout
          isOpen={isOpen}
          onClose={onClose}
          title="Create New Cell"
          description="Enter cell information to continue."
        >
          <form onSubmit={formik.handleSubmit}>
            <Box>
              <InputArea
                type="text"
                name="contributionName"
                placeholder="Cell name"
                onChange={formik.handleChange}
                isInvalid={
                  formik.errors.contributionName &&
                  formik.errors.contributionName
                }
                isError={
                  formik.errors.contributionName &&
                  formik.errors.contributionName
                }
              />
              <InputArea
                type="number"
                name="monthlyAmount"
                placeholder="Monthly Amount "
                onChange={formik.handleChange}
                isInvalid={
                  formik.errors.monthlyAmount && formik.errors.monthlyAmount
                }
                isError={
                  formik.errors.monthlyAmount && formik.errors.monthlyAmount
                }
              />
              <InputArea
                type="date"
                name="startDate"
                placeholder="Contribution Amount"
                onChange={formik.handleChange}
                isInvalid={formik.errors.startDate && formik.errors.startDate}
                isError={formik.errors.startDate && formik.errors.startDate}
              />
              <InputArea
                type="number"
                name="participants"
                placeholder="No. of Participants"
                onChange={formik.handleChange}
                isInvalid={
                  formik.errors.participants && formik.errors.participants
                }
                isError={
                  formik.errors.participants && formik.errors.participants
                }
              />
              <InputArea
                type="number"
                name="totalServer"
                placeholder="Total Savers"
                onChange={formik.handleChange}
                isInvalid={
                  formik.errors.totalServer && formik.errors.totalServer
                }
                isError={formik.errors.totalServer && formik.errors.totalServer}
              />
            </Box>
            <Flex
              gap="1em"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <ButtonInterface w={["", "250px"]} type="submit">
                {" "}
                Create Cell
              </ButtonInterface>
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
