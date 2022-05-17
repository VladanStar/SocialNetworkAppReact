import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Container, Row } from "react-materialize";
import { userService } from "../../../services/userService";
import { authentication } from "../../../services/authService";

import { ProfileModal } from "./ProfileModal/ProfileModal";
import { Loader } from "../Loader/Loader";
import { ProfileCard } from "./ProfileCard/ProfileCard";
import withAuth from "../../../hoc/withAuth";

const Profile = () => {
  let history = useHistory();
  const [user, setUser] = useState({});
  const [numbOfPosts, setNumbOfPosts] = useState(null);
  const [numbOfComments, setNumbOfComments] = useState(null);
  const [image, setImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isInfo, setIsInfo] = useState(true);
  const [isPassword, setIsPassword] = useState(false);
  const [isProfileImage, setIsProfileImage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    userService
      .getLoggedUser()
      .then((response) => {
        setUser(response);
      })
      .then(() => {
        userService
          .getSingleUserPosts(user.id)
          .then((response) => setNumbOfPosts(response));

        userService
          .getSingleUserComments(user.id)
          .then((response) => setNumbOfComments(response))
          .finally(() => setIsLoading(false));
      });
  }, [user.id, history]);

  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
    setAvatar(user.avatarUrl);
  };

  const insertData = (data, name) => {
    switch (name) {
      case "firstName":
        setUser({ ...user, firstName: data });
        break;
      case "lastName":
        setUser({ ...user, lastName: data });
        break;
      case "about":
        setUser({ ...user, about: data });
        break;
      case "prefix":
        setUser({ ...user, prefix: data });
        break;
      case "email":
        setUser({ ...user, email: data });
        break;
      case "password":
        setUser({ ...user, password: data });
        break;
      case "newPassword":
        setUser({ ...user, newPassword: data });
        break;
      default:
        return null;
    }
  };

  const saveNewPassword = () => {
    setModalIsOpen(false);
    authentication.changePassword(user);
  };

  const changeInfo = () => {
    setIsInfo(true);
    setIsProfileImage(false);
    setIsPassword(false);
  };

  const changePassword = () => {
    setIsInfo(false);
    setIsProfileImage(false);
    setIsPassword(true);
  };

  const changeProfileImage = () => {
    setIsInfo(false);
    setIsProfileImage(true);
    setIsPassword(false);
  };

  const setImageFn = (img) => {
    setImage(img);
  };

  const uploadImage = () => {
    setIsLoading(true);
    userService.uploadProfileImage(user.id, image).then(() => {
      userService
        .getLoggedUser()
        .then((response) => {
          setUser(response);
          setModalIsOpen(false);
        })
        .finally(() => setIsLoading(false));
    });
  };

  const submitData = () => {
    const data = {};
    const { firstName, lastName, about, prefix } = user;
    data.firstName = firstName;
    data.lastName = lastName;
    data.about = about;
    data.prefix = prefix;

    userService.updateUser(user.id, data).then(() => {
      window.location.reload();
    });
  };

  const imagePreview = (image) => {
    setAvatar(image);
  };

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <Row>
          <ProfileModal
            user={user}
            modalIsOpen={modalIsOpen}
            openModal={openModal}
            insertData={insertData}
            submitData={submitData}
            isPassword={isPassword}
            isProfileImage={isProfileImage}
            isInfo={isInfo}
            changeInfo={changeInfo}
            changePassword={changePassword}
            changeProfileImage={changeProfileImage}
            saveNewPassword={saveNewPassword}
            uploadImage={uploadImage}
            setImage={setImageFn}
            avatar={avatar}
            imagePreview={imagePreview}
          />
          <ProfileCard
            user={user}
            openModal={openModal}
            numbOfPosts={numbOfPosts}
            numbOfComments={numbOfComments}
          />
        </Row>
      )}
    </Container>
  );
};

export default withAuth(Profile);
