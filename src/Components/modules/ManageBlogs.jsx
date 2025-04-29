import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "../../services/blogs";
import LoadingSnippet from "./LoadingSnippet";
import ErrorPage from "../templates/ErrorPage";
import { useParams } from "react-router-dom";
import PanelPaginationBlock from "./PanelPaginationBlock";
import BlogsTable from "./BlogsTable";

export default function ManageBlogs() {
  const { page } = useParams();
  const currentPage = page ? parseInt(page) : 1;

  const { data, error, isPending } = useQuery({
    queryKey: ["GET_ALL_BLOGS_ADMIN", `${currentPage}`],
    queryFn: () => getAllBlogs({ pageNumber: currentPage, limit: 8 }),
    staleTime: 0,
  });

  if (isPending)
    return <LoadingSnippet message={"در حال دریافت لیست مقالات"} />;

  if (error) return <ErrorPage />;

  if (data) {
    const tableData = data.data.data;
    return (
      <div className="flex flex-col items-center">
        <BlogsTable data={tableData}/>

        <PanelPaginationBlock
          pagination={data.data.pagination}
          panel={"admin"}
        />
      </div>
    );
  }
}
