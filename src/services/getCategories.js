import api from "../configs/axios";

export async function getCategories() {
    const response = await api.get("blog/category");
    return response;
}