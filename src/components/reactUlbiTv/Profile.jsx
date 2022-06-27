import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector(state => state.user.value)
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <div>welcome {user.name}</div>
      <button onClick={handleLogout}>Log out</button>
    </>
  );
};

export default Profile;
