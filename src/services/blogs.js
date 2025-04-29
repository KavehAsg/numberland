import api, { apiFormData } from "../configs/axios";

export async function getAllBlogs({ pageNumber, limit }) {
    const response = await api.get(`blog?limit=${limit}&pageNumber=${pageNumber}`);
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
    let formData = new FormData();
    formData.append('blogSlug', blogData.slug);
    formData.append('blogTitle', blogData.title);
    formData.append('blogContent', blogData.content);
    formData.append('blogPreview', blogData.preview);
    formData.append('blogAuthorId', 1);
    blogData.categories.forEach((category) => {
        formData.append('blogCategories', category.blogCategoryId);
    });
    formData.append('file', blogData.image);

    const response = await apiFormData.post('blog', formData);
    console.log(response)
    return response;
}

export async function deleteBlog(blogId) {
    const response = await api.delete(`blog/${blogId}`);
    return response;
}

export async function updateBlog(blogId, blogData) {
    console.log()
    const updatedJsonPatch = [];
    for (const key in blogData) {
        updatedJsonPatch.push({
            op: "replace",
            path: `/${key}`,
            value: blogData[key],
        })
    };

    console.log(updatedJsonPatch)
}