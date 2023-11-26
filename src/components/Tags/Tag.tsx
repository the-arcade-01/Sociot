import { TagProps } from "../../utils/types";

export const Tag: React.FC<TagProps> = ({ name, removeTag, key}) => {
  return (
    <div className="badge mx-1">
        <span className="text">{name}</span>
        <span className="pl-2 close-btn" onClick={() => removeTag(key)}>&times;</span>
    </div>
  );
};
