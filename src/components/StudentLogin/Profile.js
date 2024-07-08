import React from 'react';

const Profile = () => {
  // Mock data for student profile
  const profile = {
    name: 'John Doe',
    age: 16,
    grade: '10th Grade',
    email: 'john.doe@example.com',
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>Grade: {profile.grade}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
};

export default Profile;
