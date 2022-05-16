import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import { UserForm } from "./components/UserForm/UserForm";
import React from "react";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    {<Route exact path="/" element={<UserForm/>} /> }
 
    <React.Fragment>
      {/* <div className="page-container">
        <div className="content"> */}
          {/* <Header /> */}
          {/* <Route exact path="/feed" component={Feed} /> */}
          {/* <Route exact path="/feed/post/:id" component={SinglePost} />
          <Route exact path="/profile" component={Profile} /> */}
          {/* <Route exact path="/people" component={People} />
          <Route exact path="/people/:id" component={SingleUser} /> */}
        {/* </div>
        {/* <Footer /> */}
      {/* </div> */} 
    </React.Fragment>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
