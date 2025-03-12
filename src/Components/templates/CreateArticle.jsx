import { useState, useEffect, useRef } from "react";
import useSmallScreen from "../../hooks/smallScreen";
import SmallScreenError from "../modules/SmallScreenError";
import RichTextEditor from "./RichTextEditor";
import SelectCategories from "../modules/SelectCategories";

import { useMutation } from "@tanstack/react-query";
import { createBlog } from "../../services/blogs";

export default function CreateArticle() {
  const [articleProperties, setArticleProperties] = useState({
    title: "",
    slug: "",
    content: "",
    preview: "",
    categories: [],
    image: null,
  });

  const isSmallScreen = useSmallScreen();

  const uploaderRef = useRef(null);
  const editorRef = useRef(null);

  const { mutate, isPending, isError, data, isSuccess, error } = useMutation({
    mutationKey: ["createArticle"],
    mutationFn: (articleProperties) => createBlog(articleProperties),
  });

  function createBlogHandler(e) {
    e.preventDefault();

    if (editorRef.current) {
      const editorContent = editorRef.current.getContent();
      setArticleProperties({
        ...articleProperties,
        content: editorContent,
      });
    }
    mutate(articleProperties);

    if (isError) {
      console.log(error);
    }
    if (isSuccess) {
      alert("مقاله با موفقیت ایجاد شد");
      console.log("done",data);
    }
  }

  if (isSmallScreen) {
    return (
      <SmallScreenError
        message={
          "برای تجربه کاربری بهتر باید از صفحه نمایش با اندازه بزرگ تر استفاده کنید"
        }
      />
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl text-center font-bold my-4">ایجاد مقاله</h1>
      <form className="flex flex-col gap-8 w-full max-w-[1450]">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-bold text-xl">عنوان</span>
          </div>
          <input
            type="text"
            placeholder="تلکرام آپدیت جدیدی را منتشر کرد..."
            className="input input-bordered input-primary w-full"
            value={articleProperties.title}
            onChange={(e) =>
              setArticleProperties({
                ...articleProperties,
                title: e.target.value,
              })
            }
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-bold text-xl">آدرس</span>
          </div>
          <input
            type="text"
            dir="ltr"
            placeholder="e.g: telegram published a new update"
            className="input input-bordered input-primary w-full"
            value={articleProperties.slug}
            onChange={(e) =>
              setArticleProperties({
                ...articleProperties,
                slug: e.target.value,
              })
            }
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-bold text-xl">پیش نمایش</span>
          </div>
          <textarea
            placeholder="تلگرام همانطور که وعده داده بود , آپدیت جدیدی را حول محور ادیت ویدیو منتشر کرد... "
            className="textarea textarea-bordered textarea-primary w-full"
            value={articleProperties.preview}
            onChange={(e) =>
              setArticleProperties({
                ...articleProperties,
                preview: e.target.value,
              })
            }
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-bold text-xl">محتوا</span>
          </div>
          <RichTextEditor editorRef={editorRef} />
        </label>

        <div className="flex items-end gap-12">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-bold text-xl"> تصویر کاور</span>
            </div>
            <input
              type="file"
              ref={uploaderRef}
              className="file-input file-input-bordered file-input-primary"
              onChange={(e) =>
                setArticleProperties({
                  ...articleProperties,
                  image: e.target.files[0],
                })
              }
            />
          </label>
          <button
            className="btn btn-secondary text-white font-bold"
            onClick={(e) => {
              e.preventDefault();
              console.log(uploaderRef.current.files);
              uploaderRef.current.value = "";
              setArticleProperties({ ...articleProperties, image: null });
            }}
          >
            حذف کاور
          </button>
        </div>

        <SelectCategories
          setArticleProperties={setArticleProperties}
          articleProperties={articleProperties}
        />

        <button
          type="submit"
          className="btn btn-primary w-full text-white text-lg gap-3"
          onClick={createBlogHandler}
        >
          ایجاد مقاله
          {isPending && <span className="loading loading-spinner"></span>}
        </button>
      </form>
    </div>
  );
}
