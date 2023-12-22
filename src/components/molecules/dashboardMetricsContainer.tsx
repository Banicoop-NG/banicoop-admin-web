import { Box, Text, Flex } from "@chakra-ui/react";

const MetricBox = () => {
  return (
    <Box display={"flex"} alignItems={"center"}  width={
        {
            sm: "100%",
            md: "100%",
            lg: "400px"
        }
    }
    
    border={'1px solid var(--shaded-gray)'} gap='1em' py='2em'px='2em'  borderRadius={'15px'}>
      <Box bg="gray" width={"56px"} height={"56px"} borderRadius={"8px"}></Box>
      <Box>
        <Text>Total Transactions</Text>
        <Text
          fontSize={{
            sm: "18px",
            md: "18px",
            lg: "25px",
          }}
          fontWeight={"bold"}
        >
          $60,000
        </Text>
      </Box>
    </Box>
  );
};

const DashboardMetricsContainer = () => {
  return (
    <Box>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Text>Welcome Dominic 👋</Text>
        </Box>
        <Box>
          <Text>Today</Text>
        </Box>
      </Flex>

      <Flex my="1em" gap='1.5em' justifyContent={'space-between'} flexDirection={{
        sm: "column",
        md: "column",
        lg: "row"
      }}>
      <MetricBox />
      <MetricBox />
      <MetricBox />
      </Flex>
    </Box>
  );
};

export default DashboardMetricsContainer;
