import React, { useState } from "react";
import { MdCreate } from "react-icons/md";

import useUser from "../../hooks/useUser";
import { createPost } from "../../services/api/post";
import { toastResponse } from "../../utils/toast";
import TagsInput from "../Tags/TagsInput";

const CreatePostModal = () => {
  const { userId, token } = useUser();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
    };
    const response = await createPost(token, body);
    toastResponse(response.meta.statusCode, response.meta.message);
    setTitle("");
    setContent("");
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
          <TagsInput />
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
