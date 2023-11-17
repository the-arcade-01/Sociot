import { PostBanner } from "./PostBanner";
import { PostFilters } from "./PostFilters";

import { posts } from "../../services/posts";

const PostsContainer = () => {
  return (
    <div className="w-full px-8 py-6 border border-gray-200 rounded-lg flex flex-col gap-2">
      <PostFilters />
      <hr />
      <div className="py-4 flex flex-col gap-4">
        {posts.map((post) => (
          <PostBanner
            key={post.id}
            title={post.title}
            username={post.username}
            createdAt={post.createdAt}
            votes={post.votes}
            views={post.views}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsContainer;
