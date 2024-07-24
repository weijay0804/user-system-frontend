import axios from "axios";

const baseURL = "http://127.0.0.1:8000";
const axiosInstance = axios.create({ baseURL })

axiosInstance.interceptors.request.use(
    config => {

        if (config.authRequired) {

            const token = localStorage.getItem("access_token");

            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
        }

        return config
    }, (error) => {

        return Promise.reject(error)
    }
)

export const apiHelper = axiosInstance;