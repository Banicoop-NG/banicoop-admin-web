import axios from "axios";
import Cookies from "js-cookie";

const defaultUrl = import.meta.env.VITE_APP_API_URL;
let refreshToken = Cookies.get("_refreshToken");

export const axiosInstance = axios.create({
  baseURL: defaultUrl,
  timeout: 8000,
  timeoutErrorMessage: "The request timeout, please try again later ",
});

axiosInstance.interceptors.request.use(
  async config => {
    const authorizationHeader = config.headers.Authorization;
    if (!authorizationHeader) {
      await refreshAccessToken();
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

async function refreshAccessToken() {
  try {
    const response = await axiosInstance.post("/auth/refreshAccessToken", {
      refreshToken: refreshToken,
    });
    const newAccessToken = response?.data?.payload?.newAccessToken;

    console.log(newAccessToken, "access toke");
    axiosInstance.defaults.headers.common["Authorization"] =
      "Bearer " + newAccessToken;
  } catch (error) {
    console.error("Failed to refresh access token: ", error);
    throw error;
  }
}
