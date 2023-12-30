import { TagProps } from "../../utils/types";

export const Tag: React.FC<TagProps> = ({ name }) => {
  return (
    <button className="px-2 py-1 border text-gray-600 text-sm rounded-md">
      {name}
    </button>
  );
};
