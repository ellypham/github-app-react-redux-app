import React from "react";
import PullRequestList from "./PullRequestList.js";
import RepoList from "./RepoList.js";
import Button from "./Button.js";

const Profile = ({ login, avatar_url, handleLogOut, followers, events }) => {
  return (
    <div className="profile">
      <h2>Hi {login}</h2>
      <img src={avatar_url} alt={login} />
      <Button value="Log Out" handleClick={handleLogOut} />
      <PullRequestList events={events} />
      <RepoList events={events} />
    </div>
  );
};

export default Profile;
