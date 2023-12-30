import { Link } from "react-router-dom";
import { FaCaretUp, FaEye, FaTrash } from "react-icons/fa";
import defaultUser from "../../assets/default-user.jpg";

import { Post } from "../../utils/types";
import { formatDate, formatNumber } from "../../utils/utils";
import useUser from "../../hooks/useUser";
import { deletePost } from "../../services/api/post";
import { toastResponse } from "../../utils/toast";

export const PostBanner: React.FC<Post> = ({
  userId,
  postId,
  title,
  username,
  createdAt,
  views,
  votes,
}) => {
  const { token } = useUser();
  const handleDeletePost = async () => {
    const body = {
      userId,
    };
    const response = await deletePost(token, postId, body);
    toastResponse(response.meta.statusCode, response.meta.message);
  };

  return (
    <div className="border border-gray-100 p-4 rounded-lg flex justify-between items-center shadow">
      <Link to={`/post/${postId}`}>
        <div className="flex items-center gap-5">
          <div className="w-14 h-14">
            <img src={defaultUser} alt="profile" className="rounded-full" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg">{title}</h1>
            <div className="flex gap-4 text-sm text-gray-500">
              <p>{username}</p>
              <p>created at: {formatDate(createdAt)}</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex gap-16 items-center text-lg text-gray-500 mr-20">
        <div className="flex gap-3 items-center">
          <FaCaretUp className="text-2xl text-gray-400" />
          <p>{votes}</p>
        </div>
        <div className="flex gap-3 items-center">
          <FaEye className="text-xl text-gray-400" />
          <p>{formatNumber(views)}</p>
        </div>
        {useUser().userId == userId && (
          <div>
            <FaTrash
              className="text-red-500 cursor-pointer"
              onDoubleClick={handleDeletePost}
            />
          </div>
        )}
      </div>
    </div>
  );
};
