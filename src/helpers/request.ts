import { axiosInstance } from "../config/axios";
import { useQuery } from "@tanstack/react-query";
import { _AUTH_TOKEN } from "../constant";

export const useGetUsers = () => {
  const getUsersQuery = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosInstance.get("/users");
      return response.data;
    },
  });

  return getUsersQuery;
};
