import api, { apiFormData } from "../configs/axios";

export async function getAllBlogs({pageNumber = 1 , limit = 9 }) {
    const response = await api.get(`blog?limit=${limit}&pageNumber${pageNumber}`);
    return response;
}

export async function getBlogBySlug(blogSlug) {
    const response = await api.get(`blog/SearchBySlug/${blogSlug}`);
    return response;
}

export async function getBlogByAuthor(blogSlug) {
    const response = await api.get(`blog/SearchByAuthor/${blogSlug}`);
    return response;
}

export async function getBlogByCategory(categorySlug) {
    const response = await api.get(`blog/SearchByCategory/${categorySlug}`);
    return response;
}

export async function createBlog(blogData) {
    // console.log(blogData);
    let formData = new FormData();
    formData.append('blogSlug', blogData.slug);
    formData.append('blogTitle', blogData.title);
    formData.append('blogContent', blogData.content);
    formData.append('blogPreview', blogData.preview);
    formData.append('blogAuthorId', 1);
    formData.append('blogCategories', 1);
    formData.append('file', blogData.image);

    const response = await apiFormData.post('blog', formData);
    return response;
}