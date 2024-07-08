import React from 'react';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import "../styles/ParentDashboard.css";


const ParentDashboard = () => {
  // const location = useLocation();
  // const { username } = location.state || {};

  return (
    <div id="d1"> 
      <h2>Parent Dashboard</h2>
      {/* <p>Welcome, {username}</p> */}
      <p>Here is some parent-specific data.</p>
      <nav class="row">
          <Link id="l1" to="/student-marks"   class="btn    btn-success  my-3  mx-3  text-start"  >View Student Marks</Link>
          <Link id="l2" to="/attendance"   class="btn    btn-outline-success  my-3  mx-3  text-start"  >View Attendance</Link>
      </nav>
    </div>
  );
};

export default ParentDashboard;
