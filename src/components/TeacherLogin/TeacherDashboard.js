import React from 'react';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
 

  return (

    <div  style={{maxWidth:"100%" ,margin :"0px auto"}} >
     
      <nav class="navbar bg-success text-center">
      <Link to="/" class="navbar-brand text-center text-white"  >Teacher Dashboard</Link>
        <div class="nav">
        <Link to="/create-student" class="nav-Link mx-3 btn   my-3 mx-3 d-block mx-auto  text-white ">Create Student</Link>
        <Link to="/student-list" class="nav-Link mx-3 btn   my-3 mx-3 d-block mx-auto text-white ">Student List</Link>
       
          {/* <Link  to="/student-attendance"     class="nav-Link mx-3     btn btn-success  my-3 d-block mx-auto   "    >View Student Attendance</Link> */}
          <Link to="/teacher-profile"     class="nav-Link mx-3     btn   my-3 d-block mx-auto  text-white  "    >View Teacher Profile</Link>
          <Link to="/courses-handled"     class="nav-Link mx-3     btn   my-3 d-block mx-auto  text-white  "    >Courses Handled</Link>
          {/* <Link to="/update-marks"     class="nav-Link mx-3     btn btn-success  my-3 d-block mx-auto   "    >Update Marks</Link> */}
          {/* <Link to="/update-attendance"     class="nav-Link mx-3     btn btn-success  my-3 d-block mx-auto   "    >Update Attendance</Link> */}

        </div>

        
      </nav>
    </div>
  );
};

export default TeacherDashboard;
