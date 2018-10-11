import React from "react";

const PullRequestList = ({ events }) => {
  const pullRequestEvent = events.filter(
    event => event.type === "PullRequestEvent"
  );
  console.log(pullRequestEvent);
  return (
    <React.Fragment>
      <h2>Pull Request</h2>
      <ul>
        {pullRequestEvent.map((event, i) => {
          return (
            <li key={`pr-${i}`}>
              <a href={`${event.payload.pull_request.html_url}`}>
                {event.payload.pull_request.title}
              </a>
              <p>{event.payload.pull_request.html_url}</p>
              <p>{event.payload.action}</p>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default PullRequestList;
