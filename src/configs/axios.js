import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/api/`,
    headers: {
        'Content-Type': 'application/json'
    }
})
export default api;

export const apiFormData = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/api/`,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});