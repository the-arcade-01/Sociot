import { Tag } from "./Tag";

export const TagsContainer = () => {
  const tags = ["tech", "art", "music", "gaming"];
  return (
    <div className="w-80 rounded-lg border border-gray-200 h-80 flex flex-col items-start gap-4">
      <div className="w-full flex flex-col items-center py-2 gap-2">
        <h2 className="text-xl">Tags</h2>
        <hr className="w-full border border-gray-200" />
      </div>
      <div className="flex justify-center gap-2 px-4">
        {tags.map((tag, index) => (
          <Tag key={index} name={tag} />
        ))}
      </div>
    </div>
  );
};
