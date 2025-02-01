import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/getCategories";

import LoadingSnippet from "./LoadingSnippet";
import ErrorSnippet from "./ErrorSnippet";

export default function SelectCategories({
  setArticleProperties,
  articleProperties,
}) {
  const { isPending, isError, data, refetch, error } = useQuery({
    queryKey: ["getCategories"],
    queryFn: getCategories,
    gcTime: 1 * 60 * 60 * 1000, // 1 hours
    refetchOnMount: false,
  });

  const handleCategories = (e) => {
    if (e.target.checked && articleProperties.categories.length < 2) {
      setArticleProperties({
        ...articleProperties,
        categories: [...articleProperties.categories, e.target.value],
      });
    } else if (!e.target.checked || articleProperties.categories.length >= 2) {
      e.target.checked = false;
      setArticleProperties({
        ...articleProperties,
        categories: articleProperties.categories.filter(
          (cat) => cat !== e.target.value
        ),
      });
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
              name="categories"
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
