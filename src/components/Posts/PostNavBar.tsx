import { TabProps } from "../../utils/types";
import { FaPlus } from "react-icons/fa6";
import CreatePostModal from "./CreatePostModal";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { toastResponse } from "../../utils/toast";

export const PostNavBar: React.FC<TabProps> = ({ activeTab, setActiveTab }) => {
  const isUserLoggedIn = useUser((state) => state.isUserLoggedIn);
  const navigate = useNavigate();
  const postTabs = ["Hots", "Newest to Oldest", "Most Votes"];

  const handleSetActiveTab = (value: number) => {
    setActiveTab(value);
  };

  const handleRedirectLogin = () => {
    toastResponse(0, "You need to login first :)");
    navigate("/auth/login");
  };
  return (
    <div className="flex justify-between items-center gap-6 text-gray-500">
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
      <div
        className="flex justify-between items-center gap-2 px-2 py-[6px] rounded-md bg-blue-400 text-white cursor-pointer shadow-md"
        onClick={
          !isUserLoggedIn()
            ? handleRedirectLogin
            : //@ts-ignore
              () => document.getElementById("createModal").showModal()
        }
      >
        <FaPlus />
        <p className="font-semibold">New</p>
        <CreatePostModal />
      </div>
    </div>
  );
};
