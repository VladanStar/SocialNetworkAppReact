import React, { useEffect, useState } from "react";
import { Container } from "react-materialize";
import { userService } from "../../../../services/userService";
import { ProfileCard } from "../../Profile/ProfileCard/ProfileCard";
import { Loader } from "../../Loader/Loader";
import { useHistory, useParams } from "react-router";
import withAuth from "../../../../hoc/withAuth";

const SingleUser = () => {
  let history = useHistory();
  let { id } = useParams();

  const [user, setUser] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null);
  const [numbOfPosts, setNumbOfPosts] = useState(null);
  const [numbOfComments, setNumbOfComments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    userService.getLoggedUser().then((response) => setLoggedUser(response));

    userService
      .getSingleUser(id)
      .then((response) => setUser(response))
      .then(() => {
        userService
          .getSingleUserPosts(id)
          .then((response) => setNumbOfPosts(response));

        userService
          .getSingleUserComments(id)
          .then((response) => setNumbOfComments(response));
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  // const removeUser = () => {
  //   userService.deleteSingleUser(id, user).then(() => {
  //     this.props.history.push("/");
  //   });
  // };

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {loggedUser?.id === user?.id ? (
            history.push("/profile")
          ) : (
            <ProfileCard
              user={user}
              numbOfComments={numbOfComments}
              numbOfPosts={numbOfPosts}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default withAuth(SingleUser);
