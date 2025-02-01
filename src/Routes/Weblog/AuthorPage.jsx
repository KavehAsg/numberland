import React from "react";

import { useParams } from "react-router-dom";

import Loading from "../../Components/templates/LoadingPage.jsx";
import ErrorPage from "../../Components/templates/ErrorPage.jsx";
import BlogCard from "../../Components/Weblog/BlogCard";
import AuthorInfoCard from "../../Components/Weblog/AuthorInfoCard";
import PaginationBlock from "../../Components/Weblog/PaginationBlock";
import { useQuery } from "@tanstack/react-query";
import { getBlogByAuthor } from "../../services/blogs.js";

export default function AuthorPage() {
  const {author , page} = useParams();
  const currentPage = page ? parseInt(page) : 1;

  const { data, error, isPending } = useQuery({
    queryKey: ["getBlogByAuthor"],
    queryFn: () => getBlogByAuthor(params.slug),
  });

  if (isPending) return <Loading />;

  if (error) return <ErrorPage  error={error}/>;

  if (data) {
    const {
      blogSlug,
      blogFeaturedImagePath,
      blogCategories,
      publishedAt,
      blogTitle,
      blogContent,
      blogAuthor,
    } = data.data;

    return <div className="px-4 md:px-6 lg:px-10">
        <AuthorInfoCard name={blogAuthor.name} imgUrl={blogAuthor.imagePath} bio={blogAuthor.description} />
        
        <ul className="grid grid-cols-blogCards gap-12 mt-10 ">
          {edges.map((edge) => (
            <li key={edge.node.id}>
              <BlogCard blogData={edge.node} />
            </li>
          ))}
        </ul>

        {/* <PaginationBlock allCount={count} page={currentPage} pageType={"author"} param={author}/> */}

    </div>;
  }
}
