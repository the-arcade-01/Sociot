import { useEffect, useState } from "react";
import { PostBanner } from "./PostBanner";
import { PostNavBar } from "./PostNavBar";

import { getPosts } from "../../services/api/post";
import { Post } from "../../utils/types";

const PostsContainer = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await getPosts();
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="w-full px-8 py-6 border border-gray-200 rounded-lg flex flex-col gap-2">
      <PostNavBar />
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
            createdAt={post.createdAt}
            updatedAt={post.updatedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsContainer;
