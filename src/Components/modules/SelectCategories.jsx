import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/getCategories";

import LoadingSnippet from "./LoadingSnippet";
import ErrorSnippet from "./ErrorSnippet";
import { useEffect, useState } from "react";

export default function SelectCategories({
  setArticleProperties,
  articleProperties,
}) {
  const { isPending, isError, data, refetch, error } = useQuery({
    queryKey: ["getCategories"],
    queryFn: getCategories,
    gcTime: 0,
  });

  const handleCategories = (e) => {
    const categoryId = String(e.target.value);
    const isChecked = e.target.checked;

    if (isChecked) {
      if (articleProperties.categories.length < 2) {
        setArticleProperties((prev) => ({
          ...prev,
          categories: [
            ...prev.categories,
            { blogCategoryId: categoryId, blogCategoryName: e.target.name },
          ],
        }));
      } else {
        e.target.checked = false;
      }
    } else {
      setArticleProperties((prev) => ({
        ...prev,
        categories: prev.categories.filter(
          (item) => item.blogCategoryId != categoryId
        ),
      }));
    }
  };


  if (isPending)
    return <LoadingSnippet message={"در حال دریافت لیست موضوعات"} />;

  if (isError) {
    return (
      <ErrorSnippet>
        <button
          className="btn btn-sm pt-2"
          onClick={(e) => {
            e.preventDefault();
            refetch();
          }}
        >
          تلاش مجدد
        </button>
      </ErrorSnippet>
    );
  }

  if (data) {
    return (
      <div className="flex items-center gap-6 flex-wrap ">
        {data.data.map((category) => (
          <label
            className="flex items-center gap-1"
            key={category.blogCategoryId}
          >
            <input
              type="checkbox"
              checked={
                articleProperties.categories?.find(
                  (item) => item.blogCategoryId == category.blogCategoryId
                ) || false
              }
              name={category.blogCategoryName}
              value={category.blogCategoryId}
              onChange={handleCategories}
              className="radio radio-info"
            />
            {category.blogCategoryName}
          </label>
        ))}
      </div>
    );
  }
}
