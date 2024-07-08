import React from 'react';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import "../styles/StudentDashboard.css";

const StudentDashboard = () => {
  // const location = useLocation();
  // const { username } = location.state || {};

  return (
    <div id="div2">
      <h2>Student Dashboard</h2>
      {/* <p >Welcome, {username}</p>   */}
      <nav class="row" > 
          <Link id="l1" to="/student-marks"    class="btn    btn-primary  my-3  mx-3  text-start "   >View Marks</Link>
          <Link id="l2"to="/attendance"   class="btn   btn-outline-primary  my-3  mx-3   text-start "   >View Attendance</Link>
          <Link id="l3" to="/profile"   class="btn    btn-outline-primary  my-3  mx-3 text-start "   >View Profile</Link>
          <Link id="l4" to="/courses-list"   class="btn    btn-outline-primary my-3 mx-3    text-start "   >View Courses</Link>
      </nav>
    </div>
  );
};

export default StudentDashboard;
