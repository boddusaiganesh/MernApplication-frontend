import React from 'react';
import "../styles/TeacherProfile.css";
import TeacherDashboard from "./TeacherDashboard";
const TeacherProfile = () => {
  // Mock data for teacher profile
  const profile = {
    name: 'Jane Smith',
    subject: 'Mathematics',
    email: 'jane.smith@example.com',
  };

  return (
    <div>
      <TeacherDashboard />
    <div id="div3">
      <h2 style={{color: "black"}}>Teacher Profile</h2>
      <p style={{color: "blue"}}>Name: {profile.name}</p>
      <p style={{color: "blue"}}> Subject: {profile.subject}</p>
      <p style={{color: "blue"}}>Email: {profile.email}</p>
    </div>
    </div>

  );

};

export default TeacherProfile;
