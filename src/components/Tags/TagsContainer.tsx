import { useState, useEffect } from "react";
import { getTags } from "../../services/api/post";
import { Tag } from "./Tag";

interface TagFilter {
  selectedTag: string;
  setTagFilter: (tag: string) => void;
}

export const TagsContainer: React.FC<TagFilter> = ({
  selectedTag,
  setTagFilter,
}) => {
  const [tags, setTags] = useState([]);

  const fetchTags = async () => {
    const response = await getTags();
    setTags(response.data);
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <div className="w-80 rounded-lg border border-gray-200 h-80 flex flex-col items-start gap-4">
      <div className="w-full flex flex-col items-center py-2 gap-2">
        <h2 className="text-xl">Tags</h2>
        <hr className="w-full border border-gray-200" />
      </div>
      <div className="flex flex-wrap justify-start items-center gap-2 px-4">
        {tags.map((tag, index) => (
          <Tag
            key={index}
            name={tag}
            select={tag === selectedTag}
            setTagFilter={setTagFilter}
          />
        ))}
      </div>
    </div>
  );
};
