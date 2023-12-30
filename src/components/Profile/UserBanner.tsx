import defaultUser from "../../assets/default-user.jpg";
import { UserSearch } from "../../utils/types";
import { Link } from "react-router-dom";
import { formatDateSince, formatNumber } from "../../utils/utils";

export const UserBanner: React.FC<UserSearch> = ({
  userId,
  username,
  postCount,
  viewCount,
  createdAt,
}) => {
  return (
    <Link to={`/user/${userId}`}>
      <div className="border border-gray-100 p-4 rounded-lg flex justify-between items-center shadow w-[400px]">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14">
            <img src={defaultUser} alt="profile" className="rounded-full" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg">{username}</h1>
            <div className="flex gap-4 text-md text-gray-500">
              <p>Posts: {formatNumber(postCount)}</p>
              <p>Views: {formatNumber(viewCount)}</p>
              <p>{formatDateSince(createdAt)}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
