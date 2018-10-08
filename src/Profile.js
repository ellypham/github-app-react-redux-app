import React from "react";
import FollowingList from "./FollowingList.js";
import Button from "./Button.js";

const Profile = ({ login, avatar_url, handleLogOut, followers }) => {
  return (
    <div className="profile">
      <h2>Hi {login}</h2>
      <img src={avatar_url} alt={login} />
      <Button value="Log Out" handleClick={handleLogOut} />
      <FollowingList followers={followers} />
    </div>
  );
};

export default Profile;
