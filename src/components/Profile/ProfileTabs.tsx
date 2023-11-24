import { TabProps } from "../../utils/types";

export const ProfileTabs: React.FC<TabProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const profileTabs = ["Account Details", "Your Posts"];
  const handleSetActiveTab = (value: number) => {
    setActiveTab(value);
  };
  return (
    <div className="flex items-center gap-20 text-gray-500">
      {profileTabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => handleSetActiveTab(index)}
          className={activeTab == index ? "font-medium text-black" : ""}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
