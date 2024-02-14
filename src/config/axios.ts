import Cookies from "js-cookie";
import axios from "axios";

const defaultUrl = import.meta.env.VITE_APP_API_URL;
let refreshToken = Cookies.get("_refreshToken");
let lastTokenRefreshTime = Date.now();

export const axiosInstance = axios.create({
  baseURL: defaultUrl,
  timeout: 8000,
  timeoutErrorMessage: "The request timed out, please try again later",
});

axiosInstance.interceptors.request.use(
  async config => {
    const authorizationHeader = config.headers.Authorization;
    if (!authorizationHeader || shouldRefreshToken()) {
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
    const response = await fetch(`${defaultUrl}/auth/refreshAccessToken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });
    const data = await response.json();
    const newAccessToken = data?.payload?.newAccessToken;
    axiosInstance.defaults.headers.common["Authorization"] =
      "Bearer " + newAccessToken;
    lastTokenRefreshTime = Date.now();
  } catch (error) {
    console.error("Failed to refresh access token: ", error);
    throw error;
  }
}

function shouldRefreshToken() {
  return Date.now() - lastTokenRefreshTime > 3 * 60 * 1000;
}
