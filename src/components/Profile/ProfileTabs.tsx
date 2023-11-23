import { TabProps } from "../../utils/types";

export const ProfileTabs: React.FC<TabProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const handleSetActiveTab = (value: number) => {
    setActiveTab(value);
  };
  return (
    <div className="flex items-center gap-20 text-gray-500">
      <button
        onClick={() => handleSetActiveTab(1)}
        className={activeTab == 1 ? "font-medium text-black" : ""}
      >
        Account Details
      </button>
      <button
        onClick={() => handleSetActiveTab(2)}
        className={activeTab == 2 ? "font-medium text-black" : ""}
      >
        Your Posts
      </button>
    </div>
  );
};
