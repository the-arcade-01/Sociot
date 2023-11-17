import { FaCaretUp, FaEye } from "react-icons/fa";
import taichi from "../../assets/taichi-white.jpg";

interface PostProps {
  title: string;
  username: string;
  createdAt: string;
  votes: string;
  views: string;
}

export const PostBanner: React.FC<PostProps> = ({
  title,
  username,
  createdAt,
  votes,
  views,
}) => {
  return (
    <div className="border border-gray-100 p-4 rounded-lg flex justify-between items-center">
      <div className="flex items-center gap-5">
        <div className="w-14 h-14">
          <img src={taichi} alt="profile" className="rounded-full" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg">{title}</h1>
          <div className="flex gap-4 text-sm text-gray-500">
            <p>{username}</p>
            <p>created at: {createdAt} </p>
          </div>
        </div>
      </div>
      <div className="flex gap-16 items-center text-lg text-gray-500 mr-20">
        <div className="flex gap-3 items-center">
          <FaCaretUp className="text-2xl text-gray-400" />
          <p>{votes}</p>
        </div>
        <div className="flex gap-3 items-center">
          <FaEye className="text-xl text-gray-400" />
          <p>{views}</p>
        </div>
      </div>
    </div>
  );
};
