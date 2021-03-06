import React from "react";
import { Row, Col, CardPanel } from "react-materialize";
import { Link } from "react-router-dom";
import { Comments } from "../Comments/Comments";
import { PostUser } from "../PostUser/PostUser";
import style from "./TextPost.module.css";

const TextPost = ({
  post,
  user,
  deletePost,
  isShown,
  comments,
  users,
  writeComment,
  saveComment,
  deleteComment,
  numbOfComments,
}) => {
  return (
    <Row className={style.center}>
      <Col m={12} s={12} l={9} className={style.margin}>
        <div className={style.card}>
          <PostUser
            user={user}
            post={post}
            deletePost={deletePost}
            numbOfComments={numbOfComments}
          />
          <CardPanel
            className="grey"
            style={{ marginTop: "0px", marginBottom: "9px" }}
          >
            <span className="white-text">{post.src}</span>
          </CardPanel>
          <Comments
            isShown={isShown}
            comments={comments}
            users={users}
            writeComment={writeComment}
            saveComment={saveComment}
            deleteComment={deleteComment}
          />
          {!isShown && (
            <Link to={`/feed/post/${post.id}`}>
              <i className={`${style.comment} fa fa-comment`}>
                <span className={style.numb}>
                  {numbOfComments === 0 ? "" : numbOfComments}
                </span>
              </i>
            </Link>
          )}
          <span className={style.postType}>{post.type.toUpperCase()} POST</span>
        </div>
      </Col>
    </Row>
  );
};

export { TextPost };
