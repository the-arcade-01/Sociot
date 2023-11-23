import { TabProps } from "../../utils/types";
import { FaPlus } from "react-icons/fa6";

export const PostNavBar: React.FC<TabProps> = ({ activeTab, setActiveTab }) => {
  const handleSetActiveTab = (value: number) => {
    setActiveTab(value);
  };
  return (
    <div className="flex justify-between items-center gap-6 text-gray-500">
      <div className="flex items-center gap-5">
        <button
          onClick={() => handleSetActiveTab(1)}
          className={activeTab == 1 ? "font-medium text-black" : ""}
        >
          Hots
        </button>
        <button
          onClick={() => handleSetActiveTab(2)}
          className={activeTab == 2 ? "font-medium text-black" : ""}
        >
          Newest to Oldest
        </button>
        <button
          onClick={() => handleSetActiveTab(3)}
          className={activeTab == 3 ? "font-medium text-black" : ""}
        >
          Most Votes
        </button>
      </div>
      <div className="flex justify-between items-center gap-2 px-2 py-[6px] rounded-md bg-blue-400 text-white cursor-pointer shadow-md">
        <FaPlus />
        <p className="font-semibold">New</p>
      </div>
    </div>
  );
};
