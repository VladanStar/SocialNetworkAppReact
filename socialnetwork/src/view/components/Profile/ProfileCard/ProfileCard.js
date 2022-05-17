import React from "react";
import { Col, Row } from "react-materialize";
import style from "./ProfileCard.module.css";
import avatar from "../../../../images/user.png";

const ProfileCard = ({ user, openModal, numbOfPosts, numbOfComments }) => {
  return (
    <Row className={style.center}>
      <Col m={12} s={12} l={9} className={style.margin}>
        <div className={style.card}>
          <div className={style.cardHeader}>
            <img
              src={user.avatarUrl ?? avatar}
              alt="avatar"
              className={style.profileImg}
            />
          </div>
          <div className={style.cardBody}>
            <p className={style.fullName}>{user.fullName}</p>
            <p className={style.username}>
              <i className="fa fa-envelope"></i> {user.email}
            </p>
            <p className={style.prefix}>{user.prefix}</p>
            <p className={style.about}>{user.about}</p>
            {openModal && (
              <p className={style.edit} onClick={openModal}>
                <i className="fa fa-edit"></i> edit user
              </p>
            )}
          </div>
          <div className={style.cardFooter}>
            <div className={`${style.col} ${style.vr}`}>
              <p>
                <span className={style.count}>{numbOfPosts}</span> Posts
              </p>
            </div>
            <div className={style.col}>
              <p>
                <span className={style.count}>{numbOfComments}</span> Comments
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export { ProfileCard };
