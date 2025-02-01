import React, { useEffect, useState } from "react";

// import { useQuery } from "@apollo/client";
// import { GET_BLOGS } from "../../GraphQL/queries";

import BlogCard from "../../Components/Weblog/BlogCard";
import Loading from "../../Components/templates/LoadingPage.jsx";
import ErrorPage from "../../Components/templates/ErrorPage.jsx";

import Banner from "../../assets/banner.webp";
import { useParams } from "react-router-dom";
import PaginationBlock from "../../Components/Weblog/PaginationBlock";
import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "../../services/blogs.js";

export default function MainPage() {
  const { page } = useParams();
  const currentPage = page ? parseInt(page) : 1;

  // const { loading, data, error } = useQuery(GET_BLOGS, {
  //   variables: {
  //     skip: (currentPage - 1) * 9,
  //     first: 9,
  //   },
  // });

  const { data, error, isPending } = useQuery({
    queryKey: ["GET_ALL_BLOGS"],
    queryFn: getAllBlogs,
  });

  // console.log(data);

  if (isPending) return <Loading />;

  if (error) return <ErrorPage />;

  // if (data) {
  // const {
  //   wbPostsConnection: {
  //     edges,
  //     aggregate: { count },
  //   },
  // } = data;

  return (
    <div>
      <header className="block mt-6 sm:hidden lg:block w-full ">
        <img src={Banner} alt="banner" className="w-full" />
      </header>

      <ul className="grid grid-cols-blogCards gap-12 mt-10 px-4 md:px-6 lg:px-10">
        {/* list using graphQl */}
        {/* {edges.map((edge) => (
            <li key={edge.node.id}>
              <BlogCard blogData={edge.node} />
            </li>
          ))} */}

        {data.data.map((blog) => (
            <li key={blog.blogId}>
              <BlogCard blogData={blog} />
            </li>
          ))}
      </ul>

      {/* <PaginationBlock
          allCount={count}
          page={currentPage}
          pageType={"blog"}
          param={null}
        /> */}
    </div>
  );
  // }
}
