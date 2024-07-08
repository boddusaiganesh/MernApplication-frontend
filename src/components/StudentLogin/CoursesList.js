import React from 'react';

const CoursesList = () => {
  // Mock data for courses
  const courses = [
    'Math',
    'Science',
    'English',
    'History',
    'Physical Education',
  ];

  return (
    <div>
      <h2>Courses List</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesList;
