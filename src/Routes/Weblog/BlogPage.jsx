import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_BLOG_BY_SLUG } from "../../GraphQL/queries";

import Loading from "../../Components/Loading";
import ErrorPage from "../../Components/ErrorPage";
import DateDisplay from "../../Components/Weblog/DateDisplay";

import Banner from "../../assets/banner.webp";
import CopyIcon from "../../assets/copy.svg?react";

import { socialMedias } from "../../Helpers/footerSocial";
import AuthorInfoCard from "../../Components/Weblog/AuthorInfoCard";
import SimilarBlogs from "../../Components/Weblog/SimilarBlogs";

export default function BlogPage() {
  const params = useParams();
  const { loading, data, error } = useQuery(GET_BLOG_BY_SLUG, {
    variables: { slug: params.slug },
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [window.location.href]);

  if (loading) return <Loading />;

  if (error) return <ErrorPage error={error} />;

  if (data) {
    const {
      wbPost: {
        coverImage,
        mainContent,
        wbCategory,
        publishDate,
        slug,
        title,
        wbAuthor,
      },
    } = data;

    const contentHtml = { __html: mainContent.html };

    return (
      <article className="flex flex-col items-center w-full mt-10 px-2 md:px-10">
        <div className="categories mr-10 hidden md:flex w-full md:w-5/6 lg:w-4/6 justify-start gap-4 relative z-20 top-16">
          {wbCategory.map((category) => (
            <Link
              key={category.id}
              to={`/blog/category/${category.slug}`}
              className={`inline-block py-1 px-4 rounded-2xl text-white font-bold relative top-0 hover:-top-0.5 transition-all duration-300`}
              style={{
                background: `${category.color.hex}`,
              }}
            >
              {category.title}
            </Link>
          ))}
        </div>

        <img
          src={coverImage.url}
          alt={`cover image of ${slug}`}
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
            <div id="author" className="flex items-center gap-2">
              <img
                src={wbAuthor.profilePicture.url}
                alt={wbAuthor.name}
                className="w-9 rounded-full shadow-custom"
              />
              <Link
                to={`/blog/author/${wbAuthor.slug}`}
                className="hidden md:inline-block font-bold hover:text-secondary transition-all duration-300"
              >
                {wbAuthor.name}
              </Link>
            </div>
            <DateDisplay publishDate={publishDate}>انتشار : </DateDisplay>
          </div>

          <div id="main-content" className="w-full">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-6 ">
              {title}
            </h1>
            <div
              id="blog-content"
              className=" prose prose-lg md:prose-xl font-extralight w-full max-w-full mt-6"
              dangerouslySetInnerHTML={contentHtml}
            ></div>
          </div>

          <img
            src={Banner}
            alt="banner"
            className="w-full mt-16 rounded-xl cursor-pointer"
          />

          <div
            id="sharing-section"
            className="w-full mt-16 py-12 border-y-2 flex flex-col items-center gap-8"
          >
            <div id="socials" className="flex flex-col md:flex-row items-center gap-3">
              <span className="text-xl font-bold inline-block">
                اشتراک گذاری مطلب:{" "}
              </span>
              <ul className="flex gap-3">
                {socialMedias.map((social) => (
                  <li
                    key={social.id}
                    className="w-12 h-12 rounded-full fill-gray-100 flex items-center justify-center relative top-0 hover:-top-0.5 transition-all duration-300"
                    style={{
                      background: social.color,
                    }}
                  >
                    <span className="inline-block w-4 md:w-5">{social.icon}</span>
                  </li>
                ))}
              </ul>
            </div>

            <label
              id="copy-link"
              className="w-4/5 md:w-3/5 p-1 bg-base-300 rounded-2xl py-2 px-6 flex items-center gap-3 focus:border-gray-300"
              onClick={() => navigator.clipboard.writeText(window.location.href)}
            >
              <button type="button" id="copy-btn" className="peer">
                <CopyIcon className="w-4 fill-secondary" />
              </button>
              <span dir="ltr" className="w-full max-w-full overflow-hidden text-nowrap  peer-focus:bg-primary">
                {window.location.href}
              </span>
            </label>
          </div>


        </div>
                <AuthorInfoCard imgUrl={wbAuthor.profilePicture.url} name={wbAuthor.name} slug={wbAuthor.slug} bio={wbAuthor.description}/>
                <SimilarBlogs category={wbCategory[0]} quantity={2} skip={1}/>
      </article>
    );
  }
}
