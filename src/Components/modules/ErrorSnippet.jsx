import SadIcon from "../../assets/sadIcon.svg?react";

export default function ErrorSnippet({
  children,
  error = "متاسفیم! مشکلی در اتصال به وجود اومده ...",
}) {
  return (
    <div className="flex flex-col justify-center items-center text-center italic text-lg font-bold text-red-600">
      <p>{error}</p>
      <SadIcon className="mt-2 w-14 h-14 fill-neutral" />
      <div className="mt-4">{children}</div>
    </div>
  );
}
