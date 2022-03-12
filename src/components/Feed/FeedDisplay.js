import React from "react";
import PostCard from "./PostCard";

const FeedDisplay = ({ feeds }) => {
  return (
    <>
      {feeds.map((feed) => {
        return <PostCard key={feed._id} feed={feed} />;
      })}
    </>
  );
};

export default FeedDisplay;
