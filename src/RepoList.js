import React from "react";

const RepoList = ({ events }) => {
  const forkEvent = events.filter(event => event.type === "ForkEvent");
  console.log(forkEvent);
  return (
    <React.Fragment>
      <h2>Repo List</h2>
      <ul>
        {forkEvent.map((event, i) => {
          return (
            <li key={`repo-${i}`}>
              <a href={`${event.repo.url}}`}>{event.repo.name}</a>
              <p>{event.repo.url}</p>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default RepoList;
