import PostCard from "./PostCard";
import Typography from "@mui/material/Typography";

const FeedDisplay = ({ feeds }) => {
  return (
    <>
      {feeds.length === 0 ? (
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "600",
          }}
        >
          No feeds
        </Typography>
      ) : (
        feeds.map((feed) => {
          return <PostCard key={feed._id} feed={feed} />;
        })
      )}
    </>
  );
};

export default FeedDisplay;
