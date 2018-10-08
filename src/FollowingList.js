import React from "react";

const FollowingList = ({ followers }) => {
  return (
    <React.Fragment>
      <h2>My followers</h2>
      <ul>
        {followers.map((follower, i) => {
          return (
            <li key={`follower-${i}`}>
              <img src={follower.avatar_url} alt={follower.avatar_url} />
              <p>{follower.login}</p>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default FollowingList;
