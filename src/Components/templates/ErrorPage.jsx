import SadIcon from "../../assets/sadIcon.svg?react"

export default function ErrorPage({error}) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-center text-lg md:text-xl lg:text-2xl font-bold text-neutral">
      <p>متاسفیم! مشکلی در اتصال به وجود اومده ...</p>
      <p className="mt-4">لطفا مجددا امتحان کنید</p>
      <SadIcon className="mt-10 w-24 h-24 fill-neutral" />
    </div>
  );
}
