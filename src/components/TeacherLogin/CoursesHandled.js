import React from 'react';
import TeacherDashboard from './TeacherDashboard';

const CoursesHandled = () => {
  // Mock data for courses handled by teacher
  const courses = [
    'Math 101',
    'Algebra II',
    'Geometry',
  ];

  return (
    <div>
      <TeacherDashboard />
      <h2>Courses Handled</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesHandled;
