import React from "react"
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import NavBar from "./widgets/NavBar/NavBar.js"
import Home from "./component/Home/Home"
import Courses from "./component/courses/Courses";
import About from "./component/About/About";
import { Route, Switch} from "react-router-dom"
import AddCourse from "./component/AddCourse/AddCourse";
import EditCourses from "./component/EditCourses"

function App() {
  return (
    <div className="App">
      
      <ToastContainer/>
      <NavBar />
      <Switch>
         <Route exact path="/"  component={()=><Home/>}/>
         <Route exact  path="/add">
          <AddCourse/>
         </Route>
        <Route exact path="/editcourses/:id">
        <EditCourses/>
        </Route>
        <Route path="/about">
        <About/>
        </Route>
        
      </Switch>
    
     
    </div>
  );
}
export default App;