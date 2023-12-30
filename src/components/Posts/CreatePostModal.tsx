import React, { useState } from "react";
import { MdCreate } from "react-icons/md";
import useUser from "../../hooks/useUser";
import { createPost } from "../../services/api/post";
import { toastResponse } from "../../utils/toast";

const CreatePostModal = () => {
  const { userId, token } = useUser();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagName, setTagName] = useState("");

  const handleChangeTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagName(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " && tagName.trim() !== "" && tags.length < 5) {
      setTags([...tags, tagName.trim()]);
      setTagName("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      userId,
      title,
      content,
      tags,
    };
    const response = await createPost(token, body);
    toastResponse(response.meta.statusCode, response.meta.message);
    setTitle("");
    setContent("");
    setTags([]);
  };

  return (
    <dialog id="createModal" className="modal text-black">
      <form
        className="modal-box bg-white flex flex-col items-center w-full gap-4"
        onSubmit={handleSubmit}
      >
        <input
          className="py-2 px-4 outline-none border-2 border-gray-200 rounded-md w-full"
          placeholder="Title of your post"
          type="text"
          value={title}
          onChange={handleChangeTitle}
          required
        />
        <textarea
          className="textarea border-2 border-gray-200 focus:outline-none focus:border-2 focus:border-gray-200 w-full text-base"
          placeholder="Write something awesome"
          value={content}
          onChange={handleChangeContent}
          required
        />
        <div className="flex flex-col w-full gap-2">
          <p className="text-gray-500">Tags</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="bg-gray-200 px-2 py-1 rounded-md flex items-center text-sm"
              >
                <span className="mr-1">{tag}</span>
                <button
                  className="text-gray-600 hover:text-red-600"
                  onClick={() => handleRemoveTag(tag)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            {tags.length > 4 ? "you can't enter more tags :)" : ""}
          </p>
          <input
            className="py-2 px-4 outline-none border-2 border-gray-200 rounded-md w-full"
            placeholder="Type tag name and press space"
            type="text"
            value={tagName}
            onChange={handleChangeTag}
            onKeyDown={handleInputKeyDown}
          />
        </div>
        <button
          className="px-2 py-2 bg-green-600 rounded-md shadow flex items-center gap-2 text-white font-semibold"
          type="submit"
        >
          <MdCreate className="text-lg" />
          Post
        </button>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>outside click close button</button>
      </form>
    </dialog>
  );
};

export default CreatePostModal;
