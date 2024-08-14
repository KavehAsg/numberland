import React from "react";
import { useOutletContext } from "react-router-dom";
import BlogCard from "../../Components/Weblog/BlogCard";
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../../GraphQL/queries";

export default function MainPage() {
  const {data : {wbPostsConnection : {edges}}} = useOutletContext();

    return (
      <ul 
      className="grid grid-cols-blogCards gap-12 mt-10 px-4 md:px-6 lg:px-10"
      >
        {edges.map((edge) => (
          <li key={edge.node.id}>
            <BlogCard blogData={edge.node} />
          </li>
        ))}
      </ul>
    );
}
