import { useQuery } from "@tanstack/react-query";
import DefaultTable from "../../../components/essentials/defaultTable";
import BoardContainer from "../../../layout/boardContainer";
import DashboardLayout from "../../../layout/dashboardLayout";
import { axiosInstance } from "../../../config/axios";
import { AxiosResponse } from "axios";
import { Td, Tr } from "@chakra-ui/react";
import moment from "moment";
import { useState } from "react";
import { MdMoreVert } from "react-icons/md";

const customerheader = [
  "SN",
  "Customer Name",
  "Email Address",
  "Phone Number",
  "Date joined",
  "Action",
];

const CustomersPage = () => {

  const [ searchValue , setSearchValue ]  = useState<string>("")
  const getCells = async () => {
    const request: AxiosResponse = await axiosInstance.get('/users');
    return request?.data?.payload?.data
  }
  const { data  } = useQuery({
    queryKey: ['customers'],
    queryFn: getCells
  })
  
  const filterItem = data?.filter(( value: string ) => {
      if(value !== "" || value !== null ) {
        return value
      } else {
        return  value === searchValue.trim().toLocaleLowerCase()
      }
  })

  const handleSearch = () =>{}
  return (
    <DashboardLayout>
      <BoardContainer title="Customer List">
        <DefaultTable tableHeader={customerheader} >
          {
            filterItem?.map ((  _  , key: number  ) => {
              return <Tr key={key}>
                <Td>{key+1}</Td>
                <Td>{_?.firstName} {_?.lastName}</Td>
                <Td>{_?.email}</Td>
                <Td>{_?.phoneNumber}</Td>
                <Td>{moment(_?.createdAt).format("MMMM Do YY")}</Td>
                <Td><MdMoreVert cursor='pointer' /></Td>
              </Tr>
            })
          }
        </DefaultTable>
      </BoardContainer>
    </DashboardLayout>
  );
};
export default CustomersPage;
