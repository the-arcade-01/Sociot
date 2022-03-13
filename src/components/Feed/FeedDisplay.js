import PostCard from "./PostCard";

const FeedDisplay = ({ feeds }) => {
  return (
    <>
      {feeds.length === 0
        ? "Empty"
        : feeds.map((feed) => {
            return <PostCard key={feed._id} feed={feed} />;
          })}
    </>
  );
};

export default FeedDisplay;
