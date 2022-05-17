import React from "react";
import { CardPanel } from "react-materialize";
import { CommentUser } from "./CommentUser/CommentUser";

const Comment = ({ comment, users, deleteComment }) => {
  const filterCommentUser = (id) => {
    const commUser = users.filter((user) => user.id === id);
    return commUser[0];
  };

  const commentUser = filterCommentUser(comment.owner);

  return (
    <div style={{ padding: "0px 24px" }}>
      <CommentUser
        comment={comment}
        commentUser={commentUser}
        deleteComment={deleteComment}
      />
      <CardPanel className="grey left-align" style={{ marginTop: "0px" }}>
        <span className="white-text">{comment.body}</span>
      </CardPanel>
    </div>
  );
};

export { Comment };
