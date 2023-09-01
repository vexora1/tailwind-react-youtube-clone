import ContentCards from "./ContentCards";

const Content = () => {
  return (
    <div className="
      aside
      fixed
      h-[calc(100vh-3.5rem)]
      overflow-y-auto
      overflow-x-hidden
      top-14
      right-0
      w-10/12
      col-span-2
      bg-gray-800
      text-gray-200
      flex flex-col
      justify-between
    ">
      <ContentCards />
    </div>
  );
};

export default Content;