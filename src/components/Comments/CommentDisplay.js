import CommentCard from "./CommentCard";
import Typography from "@mui/material/Typography";

const CommentDisplay = ({ comments }) => {
  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: "600", padding: "10px 25px" }}>
        Comments
      </Typography>
      {comments === undefined
        ? "Empty"
        : comments.map((comment) => {
            return <CommentCard key={comment._id} comment={comment} />;
          })}
    </>
  );
};

export default CommentDisplay;
