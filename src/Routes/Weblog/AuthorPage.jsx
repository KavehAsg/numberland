import React from "react";

import { useQuery } from "@apollo/client";
import { GET_BLOGS_BY_AUTHOR } from "../../GraphQL/queries";

import { useParams } from "react-router-dom";

import Loading from "../../Components/Loading";
import ErrorPage from "../../Components/ErrorPage";
import BlogCard from "../../Components/Weblog/BlogCard";
import AuthorInfoCard from "../../Components/Weblog/AuthorInfoCard";
import PaginationBlock from "../../Components/Weblog/PaginationBlock";

export default function AuthorPage() {
  const {author , page} = useParams();
  const currentPage = page ? parseInt(page) : 1;

  const { loading, error, data } = useQuery(GET_BLOGS_BY_AUTHOR, {
    variables: {
      authorSlug: author,
      first: 9,
      skip : (currentPage - 1) * 9 ,
    },
  });

  if (loading) return <Loading />;

  if (error) return <ErrorPage  error={error}/>;

  if (data) {
      const {wbPostsConnection : { edges ,  aggregate : {count} } , wbAuthor } = data;

    return <div className="px-4 md:px-6 lg:px-10">
        <AuthorInfoCard name={wbAuthor.name} imgUrl={wbAuthor.profilePicture.url} bio={wbAuthor.description} />
        <ul className="grid grid-cols-blogCards gap-12 mt-10 ">
          {edges.map((edge) => (
            <li key={edge.node.id}>
              <BlogCard blogData={edge.node} />
            </li>
          ))}
        </ul>

        <PaginationBlock allCount={count} page={currentPage} pageType={"author"} param={author}/>

    </div>;
  }
}
