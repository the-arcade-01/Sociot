import { useState } from "react";
import PostsContainer from "../../components/Posts/PostsContainer";
import { TagsContainer } from "../../components/Tags/TagsContainer";

export const Home = () => {
  const [selectedTag, setSelectedTag] = useState("");
  const setTagFilter = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag("");
    } else {
      setSelectedTag(tag);
    }
  };

  return (
    <div className="my-6 mx-4 px-8 flex justify-between gap-10">
      <PostsContainer tagFilter={selectedTag} />
      <TagsContainer selectedTag={selectedTag} setTagFilter={setTagFilter} />
    </div>
  );
};
