import { TagProps } from "../../utils/types";

export const Tag: React.FC<TagProps> = ({ name }) => {
  return (
    <button className="p-2 border text-gray-600 rounded-xl">{name}</button>
  );
};
