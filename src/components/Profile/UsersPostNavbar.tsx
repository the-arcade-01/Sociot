import { formatNumber } from "../../utils/utils";

interface props {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  views: number;
}

export const UsersPostNavBar: React.FC<props> = ({ activeTab, setActiveTab, total, views }) => {
  const postTabs = ["Newest to Oldest", "Most Votes"];

  const handleSetActiveTab = (value: number) => {
    setActiveTab(value);
  };

  return (
    <div className="flex justify-between items-center gap-6 text-gray-500">
      <div className="flex items-center gap-5 font-medium">
        <p>Total: <span className="text-black text-lg">{formatNumber(total)}</span></p>
        <p>Views: <span className="text-black text-lg">{formatNumber(views)}</span></p>   
      </div>
      <div className="flex items-center gap-5">
        {postTabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleSetActiveTab(index)}
            className={activeTab == index ? "font-medium text-black" : ""}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
