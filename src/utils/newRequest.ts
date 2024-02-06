import { AxiosError } from "axios";
import { axiosInstance } from "../config/axios";
import { toast } from "react-toastify";

interface IRequest {
  url: string;
  body: {};
  isMessage?: boolean;
  successMsg?: string;
}

const postRequest = async ({ url, body, successMsg }: IRequest) => {
  try {
    const request = await axiosInstance.post(url, body);
    const response = request;
    if (request.status === 201 || request.status === 2000) {
      toast.success(successMsg);
    }

    return { response };
  } catch (error) {
    const axiosErr = error as AxiosError;
    //@ts-ignore
    const errMsg = axiosErr?.response?.data?.message;
    if (Array.isArray(errMsg)) {
      errMsg.map(_ => toast.error(_));
    } else {
      toast.error(errMsg);
    }
    throw error;
  }
};

export { postRequest };
