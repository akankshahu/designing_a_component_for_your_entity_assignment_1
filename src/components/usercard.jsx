import React from "react";
import './usercard.css';

const Usercard = () => {
  const profilePhoto = 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const name = 'hama kh';
  const email = 'himada@example.com';
  const phoneNumber = '123-456-7890';
  const address = '123 Main St, Anytown, USA';

  return (
    <div className="usercard">
      <img src={profilePhoto} alt="Profile" className="usercard-photo" />
      <h2 className="usercard-name">{name}</h2>
      <p className="usercard-email">{email}</p>
      <p className="usercard-phone">{phoneNumber}</p>
      <p className="usercard-address">{address}</p>
    </div>
  );
};

export default Usercard;