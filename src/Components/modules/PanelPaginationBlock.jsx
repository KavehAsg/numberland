import React from "react";
import { useNavigate } from "react-router-dom";

export default function PanelPaginationBlock({ panel, pagination }) {
  const { totalPages, currentPage, hasNextPage, hasPreviousPage } = pagination;

  const navigate = useNavigate();

  const previousPage = (pageType, param) => {
    if (hasPreviousPage) {
      navigate(`/${panel}/panel/manage-weblog/${currentPage - 1}`);
    }
  };

  const nextPage = (pageType, param) => {
    if (hasNextPage) {
      navigate(`/${panel}/panel/manage-weblog/${currentPage + 1}`);
    }
  };

  return (
    <div className="join">
      <button className="join-item btn  btn-sm" onClick={previousPage}>
        «
      </button>
      <button className="join-item btn  btn-sm">صفحه {currentPage}</button>
      <button className="join-item btn  btn-sm" onClick={nextPage}>
        »
      </button>
    </div>
  );
}
