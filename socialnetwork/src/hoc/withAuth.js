import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { storageService } from "../services/storageService";
import { Loader } from "../view/components/Loader/Loader";

const withAuth = (Component) => {
  return (props) => {
    const [auth, setAuth] = useState(false);
    const history = useHistory();

    useEffect(() => {
      const token = storageService.get("token");
      if (token) {
        setAuth(true);
      } else {
        history.push("/");
      }
    }, [history]);
    return <>{auth ? <Component {...props} /> : <Loader />}</>;
  };
};

export default withAuth;
