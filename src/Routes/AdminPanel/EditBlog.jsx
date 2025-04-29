import { useEffect, useState } from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createBlog, getBlogBySlug, updateBlog } from "../../services/blogs";
import BlogForm from "../../Components/templates/BlogForm";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSnippet from "../../Components/modules/LoadingSnippet";
import ErrorSnippet from "../../Components/modules/ErrorSnippet";

export default function EditBlog() {
  const { slug } = useParams();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["GET_BLOG_BY_SLUG_ADMIN", slug],
    queryFn: () => getBlogBySlug(slug),
    gcTime: 0,
    staleTime: 0,
    enabled: slug ? true : false,
  });

  const [articleProperties, setArticleProperties] = useState({
    title: "",
    slug: "",
    content: "",
    preview: "",
    categories: [],
    image: null,
  });

  useEffect(() => {
    if (data) {
      setArticleProperties({
        title: data.data.blogTitle,
        slug: data.data.blogSlug,
        content: data.data.blogContent,
        preview: data.data.blogPreview,
        categories: data.data.blogCategories,
        image: data.data.blogFeaturedImagePath,
      });
    }
  }, [data]);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const editBlogMutation = useMutation({
    mutationKey: ["createArticle"],
    mutationFn: (updatedArticleProperties) =>
      updateBlog(1, updatedArticleProperties),
    // onError: (error) => {
    //   window.alert("خطا در ایجاد مقاله");
    //   console.log(error);
    // },
    // onSuccess: () => {
    //   queryClient.invalidateQueries("GET_ALL_BLOGS_ADMIN");
    //   queryClient.invalidateQueries("GET_ALL_BLOGS");
    //   setArticleProperties({
    //     title: "",
    //     slug: "",
    //     content: "",
    //     preview: "",
    //     categories: [],
    //     image: null,
    //   });
    //   alert("مقاله با موفقیت ایجاد شد");
    //   navigate("/admin/panel/manage-weblog", { replace: true });
    // },
  });

  if (isLoading)
    return <LoadingSnippet message={"در حال دریافت اطلاعات مقاله"} />;

  if (isError) {
    return (
      <ErrorSnippet>
        <button
          className="btn btn-sm pt-2"
          onClick={(e) => {
            e.preventDefault();
            refetch();
          }}
        >
          تلاش مجدد
        </button>
      </ErrorSnippet>
    );
  }

  if (data) {
    return (
      <div>
        <BlogForm
          blogData={[articleProperties, setArticleProperties]}
          blogMutation={editBlogMutation}
        />
      </div>
    );
  }
}
