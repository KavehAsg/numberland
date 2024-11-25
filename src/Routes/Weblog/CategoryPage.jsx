import React from "react";

import { useQuery } from "@apollo/client";
import { GET_BLOGS_BY_CATEGORY } from "../../GraphQL/queries";

import { useParams } from "react-router-dom";

import Loading from "../../Components/modules/Loading.jsx";
import ErrorPage from "../../Components/templates/ErrorPage.jsx";
import BlogCard from "../../Components/Weblog/BlogCard";
import CategoryInfoCard from "../../Components/Weblog/CategoryInfoCard";
import PaginationBlock from "../../Components/Weblog/PaginationBlock";

export default function CategoryPage() {
  const {category , page} = useParams();
  const currentPage = page ? parseInt(page) : 1;

  const { loading, error, data } = useQuery(GET_BLOGS_BY_CATEGORY, {
    variables: {
      categorySlug: category,
      first: 9,
      skip : (currentPage - 1) * 9 ,
    },
  });

  if (loading) return <Loading />;

  if (error) return <ErrorPage error={error} />;

  if (data) {
    const {wbPostsConnection : { edges ,  aggregate : {count} } , wbCategory } = data;

    return <div className="px-4 md:px-6 lg:px-10">
        <CategoryInfoCard title={wbCategory.title} imgUrl={wbCategory.icon.url} description={wbCategory.description} />
        <ul className="grid grid-cols-blogCards gap-12 mt-10 ">
          {edges.map((edge) => (
            <li key={edge.node.id}>
              <BlogCard blogData={edge.node} />
            </li>
          ))}
        </ul>

        <PaginationBlock allCount={count} page={currentPage} pageType={"category"} param={category}/>
    </div>;
  }
}
