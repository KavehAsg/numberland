import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Loading from "../../Components/templates/LoadingPage.jsx";
import ErrorPage from "../../Components/templates/ErrorPage.jsx";
import BlogCard from "../../Components/Weblog/BlogCard";
import AuthorInfoCard from "../../Components/Weblog/AuthorInfoCard";
import PaginationBlock from "../../Components/Weblog/PaginationBlock";
import { useQuery } from "@tanstack/react-query";
import { getBlogByAuthor } from "../../services/blogs.js";

export default function AuthorPage() {

    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, [window.location.href]);


  const { author, page } = useParams();
  // const currentPage = page ? parseInt(page) : 1;

  const { data, isError, isPending } = useQuery({
    queryKey: ["getBlogByAuthor" , `${author}`],
    queryFn: () => getBlogByAuthor(author),
    gcTime: 2 * 60 * 60 * 1000, // 2 hours
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  if (isPending) return <Loading />;

  if (isError) {
    return <ErrorPage />;
  }

  if (data) {
    const { blogAuthor } = data.data[0];
    // extract the author data from its blogs (poor api :D)

    return (
      <div className="px-4 md:px-6 lg:px-10">
        <AuthorInfoCard
          name={blogAuthor.name}
          imgUrl={blogAuthor.imagePath}
          bio={blogAuthor.description}
        />

        <ul className="grid grid-cols-blogCards gap-12 mt-10 ">
          {data.data.map((blog) => (
            <li key={blog.blogId}>
              <BlogCard blogData={blog} />
            </li>
          ))}
        </ul>

        {/* <PaginationBlock allCount={count} page={currentPage} pageType={"author"} param={author}/> */}
      </div>
    );
  }
}
