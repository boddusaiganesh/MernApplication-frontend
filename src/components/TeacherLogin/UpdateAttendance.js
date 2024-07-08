// import React, { useState } from 'react';

// const UpdateAttendance = () => {
//   const [attendance, setAttendance] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Attendance updated:', attendance);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAttendance(prevAttendance => ({ ...prevAttendance, [name]: value }));
//   };

//   return (
//     <div>
//       <h2>Update Attendance</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Student ID:
//           <input type="text" name="studentId" onChange={handleChange} />
//         </label>
//         <br />
//         <label>
//           Date:
//           <input type="date" name="date" onChange={handleChange} />
//         </label>
//         <br />
//         <label>
//           Status:
//           <select name="status" onChange={handleChange}>
//             <option value="Present">Present</option>
//             <option value="Absent">Absent</option>
//           </select>
//         </label>
//         <br />
//         <button type="submit">Update Attendance</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateAttendance;
