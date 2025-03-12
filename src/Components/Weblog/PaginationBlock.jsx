import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorPage from "../templates/ErrorPage.jsx";

export default function PaginationBlock({ pagination, pageType, param }) {
  const { totalPages, currentPage, hasNextPage, hasPreviousPage } = pagination;

  const navigate = useNavigate();

  const previousPage = (pageType, param) => {
    if (hasPreviousPage) {
      switch (pageType) {
        case "blog":
          navigate(`/blog/page/${currentPage - 1}`);
          console.log();
          break;
        case "category":
          navigate(`/blog/category/${param}/page/${currentPage - 1}`);
          break;
        case "author":
          navigate(`/blog/author/${param}/page/${currentPage - 1}`);
          break;
        default:
          return <ErrorPage />;
      }
    }
  };

  const nextPage = (pageType, param) => {
    if (hasNextPage) {
      switch (pageType) {
        case "blog":
          navigate(`/blog/page/${currentPage + 1}`);
          console.log();
          break;
        case "category":
          navigate(`/blog/category/${param}/page/${currentPage + 1}`);
          break;
        case "author":
          navigate(`/blog/author/${param}/page/${currentPage + 1}`);
          break;
        default:
          return <ErrorPage />;
      }
    }
  };

  return (
    <div className="mt-32 flex justify-center items-center gap-6 text-lg">
      {hasPreviousPage && (
        <button
          className="bg-secondary px-4 py-2 rounded-full text-white font-bold relative top-0 hover:-top-0.5 transition-all duration-300"
          onClick={() => previousPage(pageType, param)}
        >
          قبلی
        </button>
      )}
      <span
        className="inline-block font-bold text-darkPrimary tracking-wide"
        onClick={() => previousPage(pageType, param)}
      >
        برگه {currentPage} از {totalPages}
      </span>
      {hasNextPage && (
        <Link
          className="bg-secondary px-4 py-2 rounded-full text-white font-bold relative top-0 hover:-top-0.5 transition-all duration-300"
          onClick={() => nextPage(pageType, param)}
        >
          بعدی
        </Link>
      )}
    </div>
  );
}
