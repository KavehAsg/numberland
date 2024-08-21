import React from "react";

import { useQuery } from "@apollo/client";
import { GET_BLOGS_BY_CATEGORY } from "../../GraphQL/queries";

import { useParams } from "react-router-dom";

import Loading from "../../Components/Loading";
import ErrorPage from "../../Components/ErrorPage";
import BlogCard from "../../Components/Weblog/BlogCard";
import CategoryInfoCard from "../../Components/Weblog/CategoryInfoCard";

export default function CategoryPage() {
  const params = useParams();

  const { loading, error, data } = useQuery(GET_BLOGS_BY_CATEGORY, {
    variables: {
      categorySlug: params.category,
      first: 9,
    },
  });

  if (loading) return <Loading />;

  if (error) return <ErrorPage error={error} />;

  if (data) {
    const {wbPostsConnection : { edges , pageInfo } , wbCategory } = data;
    //   console.log(edges)

    return <div className="px-4 md:px-6 lg:px-10">
        {/* <AuthorInfoCard name={wbAuthor.name} imgUrl={wbAuthor.profilePicture.url} bio={wbAuthor.description} /> */}
        <CategoryInfoCard title={wbCategory.title} imgUrl={wbCategory.icon.url} description={wbCategory.description} />
        <ul className="grid grid-cols-blogCards gap-12 mt-10 ">
          {edges.map((edge) => (
            <li key={edge.node.id}>
              <BlogCard blogData={edge.node} />
            </li>
          ))}
        </ul>
    </div>;
  }
}
