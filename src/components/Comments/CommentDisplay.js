import CommentCard from "./CommentCard";

const CommentDisplay = ({ comments }) => {
  return (
    <>
      {comments.length === 0
        ? "Empty"
        : comments.map((comment) => {
            return <CommentCard key={comment._id} comment={comment} />;
          })}
    </>
  );
};

export default CommentDisplay;
