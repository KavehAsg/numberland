import { useEffect } from "react";

import { useParams } from "react-router-dom";

import Loading from "../../Components/templates/LoadingPage.jsx";
import ErrorPage from "../../Components/templates/ErrorPage.jsx";
import DateSnippet from "../../Components/Weblog/DateSnippet.jsx";
import ShareCard from "../../Components/Weblog/ShareCard.jsx";
import AuthorInfoCard from "../../Components/Weblog/AuthorInfoCard";

import Banner from "../../assets/banner.webp";

import { useQuery } from "@tanstack/react-query";
import { getBlogBySlug } from "../../services/blogs.js";
import AuthorSnippet from "../../Components/Weblog/AuthorSnippet.jsx";
import CategoriesSnippet from "../../Components/Weblog/CategoriesSnippet.jsx";

export default function BlogPage() {
  const {slug} = useParams();

  const { data, error, isPending } = useQuery({
    queryKey: ["getBlogBySlug" , `${slug}`],
    queryFn: () => getBlogBySlug(slug),
    gcTime : 1 * 60 * 60 * 1000, // 2 hours
    staleTime : 30 * 60 * 1000, // 30 minutes
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [window.location.href]);

  if (isPending) return <Loading />;

  if (error) return <ErrorPage error={error} />;

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
    const contentHtml = { __html: blogContent };

    return (
      <article className="flex flex-col items-center w-full mt-10 px-2 md:px-10">
        <CategoriesSnippet type={"blogPage"} categories={blogCategories} />

        <img
          id="cover-image"
          src={`${import.meta.env.VITE_BASE_URL}/${blogFeaturedImagePath}`}
          alt={`cover image of ${blogSlug}`}
          className="w-full md:w-5/6 lg:w-4/6 md:rounded-xl"
        />

        <div
          id="content-container"
          className="w-full md:w-5/6 lg:w-4/6 px-3 md:px-0"
        >
          <div
            id="date-author"
            className="w-full flex justify-start gap-4 mt-6"
          >
            <AuthorSnippet
              imgUrl={blogAuthor.imagePath}
              name={blogAuthor.name}
              slug={blogAuthor.slug}
            />
            <DateSnippet publishDate={publishedAt}>انتشار : </DateSnippet>
          </div>
          <div id="main-content" className="w-full">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-6 ">
              {blogTitle}
            </h1>
            <div
              id="blog-content"
              className=" prose prose-lg md:prose-xl font-extralight w-full max-w-full mt-6"
              dangerouslySetInnerHTML={contentHtml}
            ></div>
          </div>
          <img
            id="banner-image"
            src={Banner}
            alt="banner"
            className="w-full mt-16 rounded-xl cursor-pointer"
          />
          <ShareCard /> {/* share section - socials and copy link*/}
        </div>

        <AuthorInfoCard
          imgUrl={blogAuthor.imagePath}
          name={blogAuthor.name}
          slug={blogAuthor.slug}
          bio={blogAuthor.description}
        />
      </article>
    );
  }
}
