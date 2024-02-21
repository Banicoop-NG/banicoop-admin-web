//@ts-nocheck
import { Box, Text, Flex } from "@chakra-ui/react";
import { AvatarMetric } from "../../assets/icons/dashboaradMetricIcons";
import { FC, Fragment } from "react";
import { DefaultButton } from "../atoms/buttons";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { formatNumber } from "../../utils/formatNumber";

interface IMetricIcon {
  icon?: ReactNode;
  title: string;
  amount: number;
  currency?: boolean;
}

const MetricBox: FC<IMetricIcon> = ({
  currency,
  icon,
  title,
  amount,
}: IMetricIcon) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      width={{
        sm: "100%",
        md: "100%",
        lg: "400px",
      }}
      border={"1px solid var(--shaded-gray)"}
      gap="1em"
      py="2em"
      px="2em"
      borderRadius={"15px"}
    >
      <Box
        bg="rgba(105, 34, 209, 0.04)"
        width={"56px"}
        height={"56px"}
        borderRadius={"8px"}
        alignItems="center"
        justifyContent={"center"}
        display="flex"
      >
        <AvatarMetric />
      </Box>
      <Box>
        <Text fontSize="14px" color="gray.500">
          {title}
        </Text>
        <Text
          fontSize={{
            sm: "18px",
            md: "18px",
            lg: "25px",
          }}
          fontWeight={"bold"}
        >
          {currency ? "₦" : ""} {formatNumber(amount)}
        </Text>
      </Box>
    </Box>
  );
};

const days = [
  {
    title: "Today",
    isActive: true,
  },
  {
    title: "Last 7 Days",
    isActive: false,
  },
  {
    title: "Last 30 Days",
    isActive: false,
  },
  {
    title: "All Time",
    isActive: false,
  },
];

const DashboardMetricsContainer = () => {
  const { requestActions } = useSelector(state => state);
  const { allUsers } = requestActions;
  const usersLength = allUsers?.length;

  const metricData = [
    {
      title: "Total Customers",
      icon: "",
      amount: usersLength,
      currenncy: false,
    },
    {
      title: "Total Transactions",
      icon: "",
      amount: 0,
      currenncy: false,
    },
    {
      title: "Total Loans",
      icon: "",
      amount: 0,
      currenncy: false,
    },
  ];
  return (
    <Box>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Text>Welcome Dominic 👋</Text>
        </Box>
        <Box display={"flex"} gap="2em">
          {days.map((_, key) => {
            return (
              <Fragment key={key}>
                {_.isActive ? (
                  <DefaultButton>{_.title}</DefaultButton>
                ) : (
                  <Text cursor={"pointer"}>{_.title}</Text>
                )}
              </Fragment>
            );
          })}
        </Box>
      </Flex>

      <Flex
        my="1em"
        gap="1.5em"
        justifyContent={"space-between"}
        flexDirection={{
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        {metricData.map((_, key) => (
          <Fragment key={key}>
            <MetricBox
              title={_.title}
              amount={_.amount}
              currency={_.currenncy}
            />
          </Fragment>
        ))}
      </Flex>
    </Box>
  );
};

export default DashboardMetricsContainer;
