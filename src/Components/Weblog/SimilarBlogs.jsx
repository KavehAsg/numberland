import { useQuery } from "@apollo/client";
import React from "react";
import {
  GET_SIMILAR_BLOGS,
} from "../../GraphQL/queries";
import Loading from "../Loading";
import ErrorPage from "../ErrorPage";
import { useNavigate } from "react-router-dom";

export default function SimilarBlogs({ category, quantity }) {
  const { data, error, loading } = useQuery(GET_SIMILAR_BLOGS, {
    variables: { category_slug : category.slug , first: quantity },
  });

  const navigate = useNavigate();

  const clickHandler = (slug) => navigate(`/blog/${slug}`);

  if (loading) return <Loading />;

  if (error) return <ErrorPage />;

  if (data) {
    console.log(data);
    const {wbCategory : {wbPost}} = data ;
    return <div className="w-full mt-10 flex flex-col md:flex-row gap-6 items-center justify-center">
        {wbPost.map((post) => <div key={post.id} className="w-full group rounded-xl flex flex-col justify-end items-start cursor-pointer"
        onClick={() => clickHandler(post.slug)} 
        >
        <img src={post.coverImage.url} alt="relates" className="h-56 object-cover w-full md:h-fit brightness-75 group-hover:brightness-90 transition-all duration-500 rounded-2xl"></img>
        <p className="relative -top-24 md:-top-20 inline-block w-full mb-4 text-white font-bold text-lg text-center ">{post.title}</p>
        </div>)}
    </div>;
  }
}
