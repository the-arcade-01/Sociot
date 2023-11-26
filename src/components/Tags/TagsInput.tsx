import { useState } from "react";

import { Tag } from "./Tag";

function TagsInput() {
  const [postTags, setPostTags] = useState<string[]>([]);

  function handleKeyDown(e: any) {
    // If user did not press enter key, return
    if (e.key !== "Enter") return;
    // Get the value of the input
    const value = e.target.value;
    // If the value is empty, return
    if (!value.trim()) return;
    // Add the value to the tags array
    setPostTags([...postTags, value]);
    // Clear the input
    e.target.value = "";
  }

  function removeTag(index: number){
    setPostTags(postTags.filter((_, i) => i !== index))
  }

  return (
    <div className="py-2 px-4 border-2 border-gray-200 rounded-md w-full">
      { postTags.map((tag, index) => (
        <Tag removeTag={removeTag} key={index} name={tag} />
      )) }
      <input
        onKeyDown={handleKeyDown}
        type="text"
        className="flex flex-1"
      />
    </div>
  );
}

export default TagsInput;
