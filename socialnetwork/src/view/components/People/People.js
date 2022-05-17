import React, { useState, useEffect } from "react";
import { Container } from "react-materialize";
import { userService } from "../../../services/userService";
import { User } from "./User/User";
import { Loader } from "../Loader/Loader";
import { postService } from "../../../services/postService";
import { commentService } from "../../../services/commentService";
import { useHistory } from "react-router";
import withAuth from "../../../hoc/withAuth";

const People = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let history = useHistory();

  useEffect(() => {
    userService.getAllUsers().then((response) => setUsers(response));

    postService.getAllPosts().then((response) => setPosts(response));

    commentService
      .getAllComments()
      .then((response) => setComments(response))
      .finally(() => setIsLoading(false));
  }, [history]);

  const filterPostOwner = (id) => {
    const postOwner = posts.filter((post) => post.owner === id);
    return postOwner.length;
  };

  const filterCommentOwner = (id) => {
    const commentOwner = comments.filter((comment) => comment.owner === id);
    return commentOwner.length;
  };

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {users.map((user) => (
            <User
              user={user}
              key={user.id}
              numbOfPosts={filterPostOwner(user.id)}
              numbOfComments={filterCommentOwner(user.id)}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default withAuth(People);
