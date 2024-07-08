import React from 'react';

const Attendance = () => {
  // Mock data for student attendance
  const attendance = [
    { date: '2024-07-01', status: 'Present' },
    { date: '2024-07-02', status: 'Absent' },
    { date: '2024-07-03', status: 'Present' },
  ];

  return (
    <div>
      <h2>Attendance</h2>
      <ul>
        {attendance.map((record, index) => (
          <li key={index}>
            {record.date}: {record.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Attendance;
