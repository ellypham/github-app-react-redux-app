import React from "react";

const EventList = ({ events }) => {
  const pullRequestEvent = events.filter(
    event => event.type === "PullRequestEvent"
  );
  console.log(pullRequestEvent);
  return (
    <React.Fragment>
      <h2>Event List</h2>
      <ul>
        {pullRequestEvent.map((event, i) => {
          return (
            <li key={`follower-${i}`}>
              <p>{event.payload.pull_request.base.repo.fork}</p>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default EventList;
