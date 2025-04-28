import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

console.log(import.meta.env.VITE_API_URL)

export const configureApiInterceptors = (startLoading: () => void, stopLoading: () => void) => {
    axiosInstance.interceptors.request.use(config => {
        startLoading();
        return config;
    });

    axiosInstance.interceptors.response.use(
        response => {
            stopLoading();
            return response;
        },
        error => {
            stopLoading();
            return Promise.reject(error);
        }
    );
};