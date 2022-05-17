import React from "react";
import { Col, Row } from "react-materialize";
import { Link } from "react-router-dom";
import { ImagePost } from "../ImagePost/ImagePost";
import { TextPost } from "../TextPost/TextPost";
import { VideoPost } from "../VideoPost/VideoPost";
import style from "./Posts.module.css";

const Posts = ({
  posts,
  numbOfComments,
  isShown,
  deletePost,
  filterPostComments,
  filterPostUser,
}) => {
  return (
    <>
      {posts.map((post) => (
        <Row className={style.center}>
          <Col m={12} s={12} l={9} className={style.margin}>
            <div className={style.card}>
              {post.type === "text" && (
                <TextPost
                  key={post.id}
                  post={post}
                  user={filterPostUser(post.owner)}
                  numbOfComments={filterPostComments(post.id)}
                  deletePost={deletePost}
                  isShown={false}
                />
              )}
              {post.type === "video" && (
                <VideoPost
                  key={post.id}
                  post={post}
                  user={filterPostUser(post.owner)}
                  numbOfComments={filterPostComments(post.id)}
                  deletePost={deletePost}
                  isShown={false}
                />
              )}
              {post.type === "image" && (
                <ImagePost
                  key={post.id}
                  post={post}
                  user={filterPostUser(post.owner)}
                  numbOfComments={filterPostComments(post.id)}
                  deletePost={deletePost}
                  isShown={false}
                />
              )}
              {!isShown && (
                <Link to={`/feed/post/${post.id}`}>
                  <i className={`${style.comment} fa fa-comment`}>
                    <span className={style.numb}>
                      {numbOfComments === 0 ? "" : numbOfComments}
                    </span>
                  </i>
                </Link>
              )}
              <span className={style.postType}>
                {post.type.toUpperCase()} POST
              </span>
            </div>
          </Col>
        </Row>
      ))}
    </>
  );
};

export { Posts };
