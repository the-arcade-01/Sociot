import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { AccountDetails } from "./AccountDetails";
import { ProfileTabs } from "./ProfileTabs";

const ProfileContainer = () => {
  return (
    <div className="w-full px-8 py-6 border border-gray-200 rounded-lg flex flex-col gap-5">
      <div className="flex justify-start items-center gap-16">
        <Link to="/" className="flex gap-2 items-center text-gray-600">
          <IoIosArrowBack />
          Back
        </Link>
        <ProfileTabs />
      </div>
      <hr />
      <div className="px-28">
        <AccountDetails />
      </div>
    </div>
  );
};

export default ProfileContainer;
