import React, { useEffect, useState } from "react";
import { TextPost } from "./TextPost/TextPost";
import { Button, Container } from "react-materialize";
import { ImagePost } from "./ImagePost/ImagePost";
import { VideoPost } from "./VideoPost/VideoPost";
import { postService } from "../../../services/postService";
import { userService } from "../../../services/userService";
import { Loader } from "../Loader/Loader";
import { PostModal } from "./PostModal/PostModal";
import { commentService } from "../../../services/commentService";
import withAuth from "../../../hoc/withAuth";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [type, setType] = useState(null);
  const [src, setSrc] = useState(null);
  const [isText, setIsText] = useState(true);
  const [isImage, setIsImage] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const [postImage, setPostImage] = useState(null);

  useEffect(() => {
    userService.getAllUsers().then((response) => setUsers(response));

    postService
      .getAllPosts()
      .then((response) => setPosts(response))
      .finally(() => setIsLoading(false));

    commentService.getAllComments().then((response) => setComments(response));
  }, []);

  const filterPostComments = (id) => {
    const postComments = comments.filter((comment) => comment.postId === id);
    return postComments.length;
  };

  const filterPostUser = (id) => {
    const postUser = users.filter((user) => user.id === id);
    return postUser[0];
  };

  const openModal = () => {
    setModalIsOpen((prevState) => ({
      modalIsOpen: !prevState.modalIsOpen,
    }));
    setType("text")
  };

  const writePost = (post) => {
    setSrc(post);
  };

  const uploadImage = () => {
    console.log(src)
    setIsLoading(true);
    postService.createImagePost(src).then(() => {
      postService
        .getAllPosts()
        .then((response) => {
          setPosts(response);
          setModalIsOpen(false);
        })
        .finally(() => setIsLoading(false));
    });
  };

  const savePost = () => {
    setIsLoading(true);
    postService.createPost(type, src).then(() => {
      postService
      .getAllPosts()
        .then((response) => {
          setPosts(response);
          setModalIsOpen(false);
        })
        .finally(() => setIsLoading(false));
    });
  };

  const deletePost = (id) => {
    setIsLoading(true);
    postService.deletePost(id).then(() => {
      postService
        .getAllPosts()
        .then((response) => setPosts(response))
        .finally(() => setIsLoading(false));
    });
  };

  const changeText = () => {
    setIsText(true);
    setIsImage(false);
    setIsVideo(false);
    setType("text");
  };

  const changeImage = () => {
    setIsImage(true);
    setIsText(false);
    setIsVideo(false);
    setType("image");
  };

  const changeVideo = () => {
    setIsVideo(true);
    setIsText(false);
    setIsImage(false);
    setType("video");
  };

  const imagePreview = (img) => {
    setPostImage(img);
  };

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <PostModal
            openModal={openModal}
            modalIsOpen={modalIsOpen}
            writePost={writePost}
            savePost={savePost}
            changeText={changeText}
            changeImage={changeImage}
            changeVideo={changeVideo}
            isText={isText}
            isImage={isImage}
            isVideo={isVideo}
            uploadImage={uploadImage}
            src={src}
            imagePreview={imagePreview}
            postImage={postImage}
          />
          {posts.map((post) => {
            if (post.type === "text") {
              return (
                <TextPost
                  key={post.id}
                  post={post}
                  user={filterPostUser(post.owner)}
                  numbOfComments={filterPostComments(post.id)}
                  deletePost={deletePost}
                  isShown={false}
                />
              );
            }
            if (post.type === "video") {
              return (
                <VideoPost
                  key={post.id}
                  post={post}
                  user={filterPostUser(post.owner)}
                  numbOfComments={filterPostComments(post.id)}
                  deletePost={deletePost}
                  isShown={false}
                />
              );
            } else {
              return (
                <ImagePost
                  key={post.id}
                  post={post}
                  user={filterPostUser(post.owner)}
                  numbOfComments={filterPostComments(post.id)}
                  deletePost={deletePost}
                  isShown={false}
                />
              );
            }
          })}
        </>
      )}
      <Button
        onClick={openModal}
        className="red"
        fab
        icon={<i className="fa fa-plus"></i>}
        floating
        large
        node="button"
      ></Button>
    </Container>
  );
};
export default withAuth(Feed);
