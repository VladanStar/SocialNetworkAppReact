import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize";
import './App.css';
import {BrowserRouter, Router, Route} from "react-router-dom";
import UserForm from "./components/UserForm/UserForm";
import React from "react";

function App() {
  return (
   <Router>
   <Route exact path="/" component={UserForm} />
   <React.Fragment>
     <div>
       
     </div>
   </React.Fragment>

   
 
   
   </Router>
  );
}

export default App;
