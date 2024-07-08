import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../styles/StudMarks.css';
import "../styles/StudMarks.css"
 // Adjust the path according to your folder structure

const StudMarks = () => {
  // Mock data for student marks
  const marks = [
    { subject: 'Math', score: 95 },
    { subject: 'Science', score: 88 },
    { subject: 'English', score: 92 },
  ];

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center">Student Marks</h2>
          <ul className="list-group list-group-flush">
            {marks.map((mark, index) => (
              <li key={index} className="list-group-item">
                <span className="font-weight-bold">{mark.subject}:</span> {mark.score}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudMarks;

