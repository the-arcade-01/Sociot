interface TagProps {
  name: string;
  setTagFilter: (tag: string) => void;
  select: boolean;
}

export const Tag: React.FC<TagProps> = ({ name, setTagFilter, select }) => {
  const handleOnClick = () => {
    setTagFilter(name);
  };

  return (
    <button
      className={`px-2 py-1 border text-gray-600 text-sm rounded-md ${
        select ? "bg-gray-200" : ""
      }`}
      onClick={handleOnClick}
    >
      {name}
    </button>
  );
};
