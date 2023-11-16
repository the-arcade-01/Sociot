import { PostFilters } from "./PostFilters";

const PostsContainer = () => {
  return (
    <div className="w-full px-8 py-6 border border-gray-200 rounded-lg flex flex-col gap-2">
      <PostFilters />
      <hr />
    </div>
  );
};

export default PostsContainer;
