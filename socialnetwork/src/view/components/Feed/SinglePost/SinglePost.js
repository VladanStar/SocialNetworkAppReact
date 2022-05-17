import React from "react";
import { Container } from "react-materialize";
import withAuth from "../../../../hoc/withAuth";
import { commentService } from "../../../../services/commentService";
import { postService } from "../../../../services/postService";
import { userService } from "../../../../services/userService";
import { Loader } from "../../Loader/Loader";
import { ImagePost } from "../ImagePost/ImagePost";
import { TextPost } from "../TextPost/TextPost";
import { VideoPost } from "../VideoPost/VideoPost";

class SinglePost extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      post: [],
      user: [],
      users: [],
      comments: null,
      isShown: true,
      body: null,
      postId: null,
    };
  }

  componentDidMount() {
    postService
      .getSinglePost(this.props.match.params.id)
      .then((response) =>
        this.setState({ post: response, postId: response.id })
      );

    userService
      .getAllUsers()
      .then((response) => this.setState({ users: response }));

    postService
      .getSinglePostComments(this.props.match.params.id)
      .then((response) => this.setState({ comments: response }))
      .then(() => {
        userService
          .getSingleUser(this.state.post.owner)
          .then((response) => this.setState({ user: response }));
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  writeComment = (text) => {
    this.setState({ body: text });
  };

  saveComment = () => {
    commentService
      .createComment(this.state)
      .then(() => this.setState({ isLoading: true }))
      .then(() => {
        postService
          .getSinglePostComments(this.props.match.params.id)
          .then((response) =>
            this.setState({ comments: response, isLoading: false })
          );
      });
  };

  deleteComment = (id) => {
    commentService.deleteComment(id).then(() => {
      postService
        .getSinglePostComments(this.props.match.params.id)
        .then((response) => this.setState({ comments: response }));
    });
  };

  deletePost = (id) => {
    postService.deletePost(id).then(() => this.props.history.push("/feed"));
  };

  render() {
    return (
      <Container>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <>
            {this.state.post.type === "image" && (
              <ImagePost
                post={this.state.post}
                user={this.state.user}
                deletePost={this.deletePost}
                isShown={true}
                comments={this.state.comments}
                users={this.state.users}
                writeComment={this.writeComment}
                saveComment={this.saveComment}
                deleteComment={this.deleteComment}
              />
            )}
            {this.state.post.type === "text" && (
              <TextPost
                post={this.state.post}
                user={this.state.user}
                deletePost={this.deletePost}
                isShown={true}
                comments={this.state.comments}
                users={this.state.users}
                writeComment={this.writeComment}
                saveComment={this.saveComment}
                deleteComment={this.deleteComment}
              />
            )}
            {this.state.post.type === "video" && (
              <VideoPost
                post={this.state.post}
                user={this.state.user}
                deletePost={this.deletePost}
                isShown={true}
                comments={this.state.comments}
                users={this.state.users}
                writeComment={this.writeComment}
                saveComment={this.saveComment}
                deleteComment={this.deleteComment}
              />
            )}
          </>
        )}
      </Container>
    );
  }
}

export default withAuth(SinglePost);
