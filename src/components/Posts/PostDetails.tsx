import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import { useEffect } from "react";
import { updatePostViews } from "../../services/api/post";

export const PostDetails = () => {
  const postId = useParams().postId;

  const hitUpdatePostViews = async () => {
    await updatePostViews(postId || "");
  };

  useEffect(() => {
    hitUpdatePostViews();
  }, []);

  return (
    <div className="my-6 mx-4 px-8 flex justify-between gap-10">
      <div className="w-full px-8 py-6 border border-gray-200 rounded-lg flex gap-2">
        <Link to="/" className="flex gap-2 items-center text-gray-600">
          <IoIosArrowBack />
          Back
        </Link>
        <p>PostDetails: {postId}</p>
      </div>
    </div>
  );
};
