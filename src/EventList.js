import React from "react";

const EventList = ({ events }) => {
  const pullRequestEvent = events.filter(event => event.type === "ForkEvent");
  console.log(pullRequestEvent);
  return (
    <React.Fragment>
      <h2>Event List</h2>
      <ul>
        {pullRequestEvent.map((event, i) => {
          return (
            <li key={`follower-${i}`}>
              <p>label: {event.payload.pull_request.base.label}</p>
              <p>{event.payload.pull_request.base.repo.forks_url}</p>
              <p
                className={
                  event.payload.action === "open"
                    ? "status-open"
                    : "status-closed"
                }
              >
                {event.payload.action}
              </p>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default EventList;
