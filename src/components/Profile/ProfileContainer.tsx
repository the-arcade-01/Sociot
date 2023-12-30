import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { AccountDetails } from "./AccountDetails";
import { ProfileTabs } from "./ProfileTabs";
import { UsersPostDetails } from "./UsersPostDetails";
import useUser from "../../hooks/useUser";

const ProfileContainer = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { userId } = useUser();

  return (
    <div className="w-full px-8 py-6 border border-gray-200 rounded-lg flex flex-col gap-5">
      <div className="flex justify-start items-center gap-16">
        <Link to="/" className="flex gap-2 items-center text-gray-600">
          <IoIosArrowBack />
          Back
        </Link>
        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <hr />
      <div className="px-28">
        {activeTab == 0 ? (
          <AccountDetails />
        ) : (
          <UsersPostDetails userId={userId} />
        )}
      </div>
    </div>
  );
};

export default ProfileContainer;
