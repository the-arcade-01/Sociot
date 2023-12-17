import { useEffect, useState } from "react";
import { UsersPostNavBar } from "./UsersPostNavbar";
import { getUserStats } from "../../services/api/user";
import { Post, UserSearch } from "../../utils/types";
import { getUserPosts } from "../../services/api/post";
import { PostBanner } from "../Posts/PostBanner";
import { formatDateSince } from "../../utils/utils";

interface props {
  userId: number;
}

export const UsersPostDetails: React.FC<props> = ({ userId }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [userStats, setUserStats] = useState<UserSearch>();
  const [posts, setPosts] = useState([]);

  const fetchUserStats = async () => {
    const response = await getUserStats(userId);
    setUserStats(response.data);
  };

  const fetchUserPosts = async () => {
    const response = await getUserPosts(userId);
    setPosts(response.data);
  };

  useEffect(() => {
    fetchUserStats();
    fetchUserPosts();
  }, [userId]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5 items-center text-lg text-gray-500">
        <p>
          User: <span className="text-black">{userStats?.username}</span>
        </p>
        <p>{formatDateSince(userStats?.createdAt || "")}</p>
      </div>
      <UsersPostNavBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        total={userStats?.postCount || 0}
        views={userStats?.viewCount || 0}
      />
      <div className="py-4 flex flex-col gap-4">
        {posts ? (
          posts.map((post: Post) => (
            <PostBanner
              key={post.postId}
              userId={post.userId}
              username={post.username}
              postId={post.postId}
              title={post.title}
              content={post.content}
              views={post.views}
              createdAt={post.createdAt}
              updatedAt={post.updatedAt}
            />
          ))
        ) : (
          <p className="text-lg font-medium">No posts yet :(</p>
        )}
      </div>
    </div>
  );
};
