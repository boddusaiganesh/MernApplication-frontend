import React from 'react';

const StudentMarks = () => {
  // Mock data for student marks
  const marks = [
    { subject: 'Math', score: 95 },
    { subject: 'Science', score: 88 },
    { subject: 'English', score: 92 },
  ];

  return (
    <div>
      <h2>Student Marks</h2>
      <ul>
        {marks.map((mark, index) => (
          <li key={index}>
            {mark.subject}: {mark.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentMarks;
