import React, { useRef } from "react";
import { Outlet } from "react-router-dom";

import WbNavbar from "../../Components/Weblog/WbNavbar";
import WbFooter from "../../Components/Weblog/WbFooter";

import ArrowIcon from "../../assets/arrow.svg?react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../../GraphQL/queries";

import ErrorPage from "../../Components/ErrorPage";
import Loading from "../../Components/Loading";

export default function BlogLayout() {
  const { loading, error, data } = useQuery(GET_BLOGS);

  const navbarRef = useRef(null);

  const scrollToTop = () =>
    navbarRef.current.scrollIntoView({
      behavior: "smooth",
    });

  if (loading) return <Loading />;

  if (error) return <ErrorPage />;
  else if (data)
    return (
      <div className="w-full font-numberland ">
        <WbNavbar ref={navbarRef} />
        <main>
          <Outlet context={{ data }} />
        </main>
        <WbFooter />

        <button
          id="scroll-to-top"
          className="btn fixed bottom-14 left-14 btn-ghost btn-circle bg-black hover:bg-neutral"
          onClick={scrollToTop}
        >
          <ArrowIcon className="w-3 h-3 -rotate-90 fill-white" />
        </button>
      </div>
    );
}
