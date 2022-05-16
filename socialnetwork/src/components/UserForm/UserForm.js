import React, { useState } from "react";
import { Container, Row, Col } from "react-materialize";
import { authentication } from "../../services/authService";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";
import style from "./UserForm.module.css";
import { Loader } from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [user, setUser] = useState({});
  const [isLog, setIsLog] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  let history = useNavigate();

  const insertData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitData = () => {
    setIsLoading(true);
    if (isLog) {
      authentication
        .logIn(user)
        .then((response) => {
          if (response.status === 200) {
            history.push("/feed");
          }
        })
        .catch((error) => setErrorMsg(error.response.data))
        .finally(() => setIsLoading(false));
    } else {
      authentication
        .register(user)
        .then((response) => {
          if (response.status === 200) {
            history.push("/feed");
          }
        })
        .catch((error) => setErrorMsg(error.response.data))
        .finally(() => setIsLoading(false));
    }
  };

  const registerForm = () => {
    setIsLog(false);
  };

  const loginForm = () => {
    setIsLog(true);
  };

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <Container
          className={style.form}
          onKeyUp={(event) => event.keyCode === 13 && submitData()}
        >
          {errorMsg ? (
            <h1 className={`center-align ${style.padding} ${style.red}`}>
              {errorMsg.error}!
            </h1>
          ) : (
            <h1 className={`center-align ${style.padding}`}>Social Network</h1>
          )}
          <Row>
            <div>
              <span
                className={`${style.right} ${isLog && style.activeR}`}
                onClick={loginForm}
              >
                LOGIN
              </span>
              <span
                className={`${style.left} ${!isLog && style.activeL}`}
                onClick={registerForm}
              >
                REGISTER
              </span>
            </div>
            <Col l={6} className={style.margin}>
              {isLog ? (
                <Login insertData={insertData} submitData={submitData} />
              ) : (
                <Register insertData={insertData} submitData={submitData} />
              )}
            </Col>
            <Col l={6} className={style.info}>
              <p>
                If you don't want to Register account you can get in as Demo
                User.
              </p>
              <p>
                email: <span className={style.account}>demo@gmail.com</span>
              </p>
              <p>
                password: <span className={style.account}>demodemo</span>
              </p>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
};

export { UserForm };