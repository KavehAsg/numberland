import { useParams } from "react-router-dom";

import Loading from "../../Components/templates/LoadingPage.jsx";
import ErrorPage from "../../Components/templates/ErrorPage.jsx";
import BlogCard from "../../Components/Weblog/BlogCard";
import CategoryInfoCard from "../../Components/Weblog/CategoryInfoCard";
import PaginationBlock from "../../Components/Weblog/PaginationBlock";
import { useQuery } from "@tanstack/react-query";
import { getBlogByCategory } from "../../services/blogs.js";
import { useEffect } from "react";

export default function CategoryPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [window.location.href]);

  const { category, page } = useParams();
  const currentPage = page ? parseInt(page) : 1;

  const { data, isError, isPending } = useQuery({
    queryKey: ["getBlogByAuthor", `${category}`],
    queryFn: () => getBlogByCategory(category),
    gcTime: 2 * 60 * 60 * 1000, // 2 hours
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  if (isPending) return <Loading />;

  if (isError) return <ErrorPage />;

  if (data) {
    const { blogCategories } = data.data[0];
    const blogCategory = blogCategories.find(
      (cat) => cat.blogCategorySlug === category
    );
    // extract the category data from its blogs (poor api :D)

    console.log(data);

    return (
      <div className="px-4 md:px-6 lg:px-10">
        <CategoryInfoCard
          title={blogCategory.blogCategoryName}
          imgUrl={blogCategory.icon}
          description={blogCategory.blogCategoryDescription}
        />

        <ul className="grid grid-cols-blogCards gap-12 mt-10 ">
          {data.data.map((blog) => (
            <li key={blog.blogId}>
              <BlogCard blogData={blog} />
            </li>
          ))}
        </ul>

        {/* <PaginationBlock
          allCount={count}
          page={currentPage}
          pageType={"category"}
          param={category}
        /> */}
      </div>
    );
  }
}
