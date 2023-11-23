import { FaPlus } from "react-icons/fa6";

export const PostNavBar = () => {
  return (
    <div className="flex justify-between items-center gap-6 text-gray-900">
      <div className="flex items-center gap-5">
        <h1>Hots</h1>
        <h1>Newest to Oldest</h1>
        <h1>Most Votes</h1>
      </div>
      <div className="flex justify-between items-center gap-2 px-2 py-1 rounded-md bg-blue-400 text-white cursor-pointer shadow-md">
        <FaPlus />
        <p className="font-semibold">New</p>
      </div>
    </div>
  );
};
