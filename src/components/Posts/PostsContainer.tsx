import { useEffect, useState } from "react";
import { PostBanner } from "./PostBanner";
import { PostNavBar } from "./PostNavBar";

import { getPosts } from "../../services/api/post";
import { Post } from "../../utils/types";

const PostsContainer = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async (order: string) => {
    const response = await getPosts(order);
    setPosts(response.data);
  };

  useEffect(() => {
    let order = "hot";
    switch (activeTab) {
      case 0:
        order = "hot";
        break;
      case 1:
        order = "new";
        break;
      case 2:
        order = "vote";
        break;
      default:
        order = "hot";
        break;
    }
    fetchPosts(order);
  }, [activeTab]);

  return (
    <div className="w-full px-8 py-6 border border-gray-200 rounded-lg flex flex-col gap-2">
      <PostNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <hr />
      <div className="py-4 flex flex-col gap-4">
        {posts.map((post: Post) => (
          <PostBanner
            key={post.postId}
            userId={post.userId}
            username={post.username}
            postId={post.postId}
            title={post.title}
            content={post.content}
            views={post.views}
            votes={post.votes}
            tags={post.tags}
            createdAt={post.createdAt}
            updatedAt={post.updatedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsContainer;
