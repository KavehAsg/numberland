import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorPage from "../ErrorPage";

export default function PaginationBlock({ allCount, page, pageType, param }) {
  const possiblePages = Math.ceil(allCount / 9);
  const navigate = useNavigate();

  const previousPage = (pageType, param) => {
    if (page > 2) {
      switch (pageType) {
        case "blog":
          navigate(`/blog/page/${page - 1}`);
          console.log();
          break;
        case "category":
          navigate(`/blog/category/${param}/page/${page - 1}`);
          break;
        case "author":
          navigate(`/blog/author/${param}/page/${page - 1}`);
          break;
        default:
          return <ErrorPage />;
      }
    } else if (page === 2) {
      switch (pageType) {
        case "blog":
          navigate("/blog");
          break;
        case "category":
          navigate(`/blog/category/${param}`);
          break;
        case "author":
          navigate(`/blog/author/${param}`);
          break;
        default:
          return <ErrorPage />;
      }
    }
  };

  const nextPage = (pageType, param) => {
    if (page + 1 <= possiblePages) {
      switch (pageType) {
        case "blog":
          navigate(`/blog/page/${page + 1}`);
          console.log();
          break;
        case "category":
          navigate(`/blog/category/${param}/page/${page + 1}`);
          break;
        case "author":
          navigate(`/blog/author/${param}/page/${page + 1}`);
          break;
        default:
          return <ErrorPage />;
      }
    }
  };

  return (
    <div className="mt-32 flex justify-center items-center gap-6 text-lg">
      {page > 1 && (
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
        برگه {page} از {possiblePages}
      </span>
      {page < possiblePages && <Link className="bg-secondary px-4 py-2 rounded-full text-white font-bold relative top-0 hover:-top-0.5 transition-all duration-300"
      onClick={() => nextPage(pageType , param)}>
        بعدی
      </Link>}
    </div>
  );
}
