import React from "react";

const Profile = ({ data }) => {
  const { name, age, email } = data;
  return (
    <div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" value={age} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} />
      </div>
    </div>
  );
};

export default Profile;
