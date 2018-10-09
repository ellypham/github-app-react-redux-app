import React from "react";
import FollowingList from "./FollowingList.js";
import EventList from "./EventList.js";
import Button from "./Button.js";

const Profile = ({ login, avatar_url, handleLogOut, followers, events }) => {
  return (
    <div className="profile">
      <h2>Hi {login}</h2>
      <img src={avatar_url} alt={login} />
      <Button value="Log Out" handleClick={handleLogOut} />
      <FollowingList followers={followers} />
      <EventList events={events} />
    </div>
  );
};

export default Profile;
