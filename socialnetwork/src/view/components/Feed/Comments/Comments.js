import React from "react";
import { Button } from "react-materialize";
import { Comment } from "./Comment/Comment";

const Comments = ({
  isShown,
  comments,
  users,
  writeComment,
  saveComment,
  deleteComment,
}) => {
  const writing = (event) => {
    const text = event.target.value;
    writeComment(text);
  };

  return (
    <>
      {isShown && (
        <>
          <div
            style={{ padding: "10px 24px 20px 24px" }}
            onKeyUp={(event) => event.keyCode === 13 && saveComment()}
          >
            <i className="fa fa-pencil"></i> Write comment
            <input type="text" onChange={writing} />
            <Button onClick={saveComment}>
              <i className="fa fa-send"></i>
            </Button>
          </div>
          <>
            {comments.length ? (
              <>
                {comments.map((comment) => (
                  <Comment
                    key={comment.id}
                    comment={comment}
                    users={users}
                    deleteComment={deleteComment}
                  />
                ))}
              </>
            ) : (
              <></>
            )}
          </>
        </>
      )}
    </>
  );
};

export { Comments };
