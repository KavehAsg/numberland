import { useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../../services/blogs";
import BlogForm from "../../Components/templates/BlogForm";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const [articleProperties, setArticleProperties] = useState({
    title: "",
    slug: "",
    content: "",
    preview: "",
    categories: [],
    image: null,
  });

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const createBlogMutation = useMutation({
    mutationKey: ["createArticle"],
    mutationFn: (articleProperties) => createBlog(articleProperties),
    onError: (error) => {
      window.alert("خطا در ایجاد مقاله");
      console.log(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("GET_ALL_BLOGS_ADMIN");
      queryClient.invalidateQueries("GET_ALL_BLOGS");
      setArticleProperties({
        title: "",
        slug: "",
        content: "",
        preview: "",
        categories: [],
        image: null,
      });
      alert("مقاله با موفقیت ایجاد شد");
      navigate("/admin/panel/manage-weblog", { replace: true });
    },
  });

  return (
    <div>
      <BlogForm
        blogData={[articleProperties, setArticleProperties]}
        blogMutation={createBlogMutation}
      />
    </div>
  );
}
