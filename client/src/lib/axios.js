import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://thinkboard-0bbi.onrender.com/api",
    withCredentials: true,
});