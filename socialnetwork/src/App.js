import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserForm from "./components/UserForm/UserForm";
import React from "react";

function App() {
  return (
   <Routes>
   <Route exact path="/" component={UserForm} />
   <React.Fragment>
     <div>

     </div>
   </React.Fragment>
   </Routes>
  );
}

export default App;
