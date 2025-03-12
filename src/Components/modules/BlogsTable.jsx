import React from "react";
import DateSnippet from "../Weblog/DateSnippet";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBlog } from "../../services/blogs";

export default function BlogsTable({ data }) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (blogId) => deleteBlog(blogId),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      window.alert("مقاله با موفقیت حذف شد");
      queryClient.invalidateQueries("GET_ALL_BLOGS_ADMIN");
    },
  });

  const deleteHandler = (blogId) => {
    const confirmDelete = window.confirm("آیا از حذف این مقاله اطمینان دارید؟");

    if (confirmDelete) {
      deleteMutation.mutate(blogId);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>عنوان</th>
            <th className="text-center">نویسنده</th>
            <th className="text-center">تاریخ انتشار</th>
          </tr>
        </thead>

        <tbody>
          {data.map((blog) => (
            <tr key={blog.blogId}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/${
                          blog.blogFeaturedImagePath
                        }`}
                        alt="blog cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{blog.blogTitle}</div>
                    <div className="text-sm opacity-50">
                      {blog.blogCategories[0].blogCategoryName}
                      {blog.blogCategories[1] &&
                        ` , ${blog.blogCategories[1].blogCategoryName}`}
                    </div>
                  </div>
                </div>
              </td>

              <td className="text-center">{blog.blogAuthor.name}</td>

              <td>
                <DateSnippet
                  publishDate={blog.publishedAt}
                  icon={false}
                ></DateSnippet>
              </td>

              <th>
                <button className="btn btn-ghost btn-xs pt-1">ویرایش</button>
              </th>
              <th>
                <button
                  className="btn btn-xs pt-1 btn-outline btn-error"
                  onClick={() => deleteHandler(blog.blogId)}
                >
                  حذف
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
