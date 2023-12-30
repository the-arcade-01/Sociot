import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import defaultUser from "../../assets/default-user.jpg";
import { useEffect, useState } from "react";
import { getPostById, updatePostViews } from "../../services/api/post";
import { Post } from "../../utils/types";
import { formatDateAgo, formatNumber } from "../../utils/utils";
import { Tag } from "../Tags/Tag";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import {
  getUserVotesStatus,
  getVotesByPostId,
  updateUserVotes,
} from "../../services/api/votes";
import useUser from "../../hooks/useUser";

export const PostDetails = () => {
  const { userId, token } = useUser();
  const postId = useParams().postId;

  const [post, setPost] = useState<Post>();
  const [votes, setVotes] = useState(0);
  const [userVoteStatus, setUserVoteStatus] = useState(0);

  const hitUpdatePostViews = async () => {
    await updatePostViews(postId || "");
  };

  const fetchPostDetails = async (postId: string) => {
    const response = await getPostById(postId);
    setPost(response.data);
  };

  const fetchVotes = async (postId: string) => {
    const response = await getVotesByPostId(postId);
    setVotes(response.data);
  };

  const fetchUserVotesStatus = async (
    postId: string,
    userId: number,
    token: string
  ) => {
    const response = await getUserVotesStatus(postId, userId, token);
    setUserVoteStatus(response.data);
  };

  const handleVoteClick = (type: string) => {
    if (type === "d") {
      if (userVoteStatus === -1) {
        setVotes((votes) => votes + 1);
        setUserVoteStatus(0);
      } else if (userVoteStatus === 1) {
        setVotes((votes) => votes - 2);
        setUserVoteStatus(-1);
      } else {
        setVotes((votes) => votes - 1);
        setUserVoteStatus(-1);
      }
    } else if (type === "u") {
      if (userVoteStatus === 1) {
        setVotes((votes) => votes - 1);
        setUserVoteStatus(0);
      } else if (userVoteStatus === -1) {
        setVotes((votes) => votes + 2);
        setUserVoteStatus(1);
      } else {
        setVotes((votes) => votes + 1);
        setUserVoteStatus(1);
      }
    }
    updateUserVotes(postId || "", userId, token, type);
  };

  useEffect(() => {
    fetchPostDetails(postId || "");
    fetchVotes(postId || "");
    fetchUserVotesStatus(postId || "", userId, token);
  }, [postId]);

  useEffect(() => {
    hitUpdatePostViews();
  }, []);

  return (
    <div className="my-6 mx-4 px-8 flex flex-col justify-center items-center">
      <div className="w-[80%] px-12 py-4 border border-gray-200 rounded-md flex gap-10 items-start">
        <div className="flex flex-col gap-10">
          <Link to="/" className="flex gap-2 items-center text-gray-500">
            <IoIosArrowBack />
            Back
          </Link>
          <div className="flex flex-col gap-3 items-center">
            <FaCaretUp
              onClick={() => {
                handleVoteClick("u");
              }}
              className={`cursor-pointer border border-gray-200 rounded-md text-lg w-8 h-8 px-2 bg-gray-100 ${
                userVoteStatus == 1 ? "text-orange-300" : ""
              }`}
            />
            <p className="text-gray-400">{formatNumber(votes)}</p>
            <FaCaretDown
              onClick={() => {
                handleVoteClick("d");
              }}
              className={`cursor-pointer border border-gray-200 rounded-md text-lg w-8 h-8 px-2 bg-gray-100 ${
                userVoteStatus == -1 ? "text-orange-300" : ""
              }`}
            />
          </div>
        </div>
        {post == undefined ? (
          <p>Post not found, please go back :)</p>
        ) : (
          <div className="flex flex-col items-start gap-4 w-full">
            <h1 className="text-xl flex flex-wrap">{post.title}</h1>
            <hr className="border border-gray-100 w-full" />
            <div className="flex items-center gap-5">
              <div className="w-8 h-8">
                <img src={defaultUser} alt="profile" className="rounded-full" />
              </div>
              <Link
                to={`/user/${post.userId}`}
                className="text-[#444] font-medium"
              >
                {post.username}
              </Link>
              <p className="text-sm text-gray-500">
                {formatDateAgo(post.createdAt)}
              </p>
              <p className="text-sm text-gray-500">{post.views} views</p>
            </div>
            <div className="py-2 text-gray-600 flex flex-wrap">
              {post.content}
            </div>
            <div className="flex gap-2">
              {post.tags.map((tag, index) => (
                <Tag
                  name={tag}
                  key={index}
                  setTagFilter={() => {}}
                  select={false}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
