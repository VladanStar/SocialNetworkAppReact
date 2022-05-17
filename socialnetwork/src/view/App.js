import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize";
import Header from "../view/components/Header/Header";
import { Footer } from "../view/components/Footer/Footer";
import { Switch, Route } from "react-router-dom";
import Feed from "../view/components/Feed/Feed";
import Profile from "../view/components/Profile/Profile";
import { UserForm } from "../view/components/UserForm/UserForm";
import People from "../view/components/People/People";
import SingleUser from "../view/components/People/SingleUser/SingleUser";
import SinglePost from "./components/Feed/SinglePost/SinglePost";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={UserForm} />
      <React.Fragment>
        <div className="page-container">
          <div className="content">
            <Header />
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/feed/post/:id" component={SinglePost} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/people" component={People} />
            <Route exact path="/people/:id" component={SingleUser} />
          </div>
          <Footer />
        </div>
      </React.Fragment>
    </Switch>
  );
}

export default App;
