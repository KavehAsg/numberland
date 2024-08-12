import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "../../Components/Weblog/BlogCard";

export default function Blogs() {
  const { blogs , pageInfo } = useLoaderData();
    return (
      <ul 
      className="grid grid-cols-blogCards gap-12 mt-10 px-4 md:px-6 lg:px-10"
      >
        {blogs.map((blog) => (
          <li key={blog.id}>
            <BlogCard blogData={blog} />
          </li>
        ))}
      </ul>
    );
}
