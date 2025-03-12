import BlogCard from "../../Components/Weblog/BlogCard";
import Loading from "../../Components/templates/LoadingPage.jsx";
import ErrorPage from "../../Components/templates/ErrorPage.jsx";
import PaginationBlock from "../../Components/Weblog/PaginationBlock";

import Banner from "../../assets/banner.webp";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "../../services/blogs.js";

export default function MainPage() {
  const { page } = useParams();
  const currentPage = page ? parseInt(page) : 1;

  const { data, error, isPending } = useQuery({
    queryKey: ["GET_ALL_BLOGS", `${currentPage}`],
    queryFn: () => getAllBlogs({ pageNumber: currentPage, limit: 9 }),
    staleTime: 0,
  });

  if (isPending) return <Loading />;

  if (error) {
    console.log(error);
    return <ErrorPage />;
  }

  if (data) {
    return (
      <div>
        <header className="block mt-6 sm:hidden lg:block w-full ">
          <img src={Banner} alt="banner" className="w-full" />
        </header>

        <ul className="grid grid-cols-blogCards gap-12 mt-10 px-4 md:px-6 lg:px-10">
          {data.data.data.map((blog) => (
            <li key={blog.blogId}>
              <BlogCard blogData={blog} />
            </li>
          ))}
        </ul>

        <PaginationBlock
          pagination={data.data.pagination}
          pageType={"blog"}
          param={null}
        />
      </div>
    );
  }
}
