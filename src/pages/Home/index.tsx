import PostsContainer from "../../components/Posts/PostsContainer";
import { TagsContainer } from "../../components/Tags/TagsContainer";

export const Home = () => {
  return (
    <div className="my-6 mx-4 px-8 flex justify-between gap-10">
      <PostsContainer />
      <TagsContainer />
    </div>
  );
};
