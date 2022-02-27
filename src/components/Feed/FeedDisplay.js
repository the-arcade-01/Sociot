import React from "react";
import PostCard from "./PostCard";

const FeedDisplay = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return <PostCard key={post._id} post={post} />;
      })}
    </>
  );
};

export default FeedDisplay;
