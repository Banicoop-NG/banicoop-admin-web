import axios from "axios"

const defaultUrl = import.meta.env.VITE_APP_API_URL

export const axiosInstance = axios.create({
    baseURL: defaultUrl,
    timeout: 10000, 
    timeoutErrorMessage: "The request timeout, please try again later ",
})