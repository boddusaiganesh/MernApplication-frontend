import React, { useState } from 'react';

const UpdateMarks = () => {
  const [marks, setMarks] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Marks updated:', marks);
    // Add logic to update marks in the backend
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMarks(prevMarks => ({ ...prevMarks, [name]: value }));
  };

  return (
    <div>
      <h2>Update Marks</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Student ID:
          <input type="text" name="studentId" onChange={handleChange} />
        </label>
        <br />
        <label>
          Subject:
          <input type="text" name="subject" onChange={handleChange} />
        </label>
        <br />
        <label>
          Marks:
          <input type="text" name="marks" onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Update Marks</button>
      </form>
    </div>
  );
};

export default UpdateMarks;
