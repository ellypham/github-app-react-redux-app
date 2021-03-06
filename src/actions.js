export const handleChangeUsername = e => ({
  type: "CHANGE_USERNAME",
  payload: e.target.value
});

const getGithubUser = username =>
  fetch(`https://api.github.com/users/${username}`);

export const handleLogin = profile => ({
  type: "LOGIN",
  payload: profile
});

const fetchEvents = events => ({
  type: "FETCH_EVENTS",
  payload: events
});

const getGithubEvents = username =>
  fetch(`https://api.github.com/users/${username}/events`);

export const login = username => dispatch => {
  getGithubUser(username)
    .then(res => res.json())
    .then(profile => dispatch(handleLogin(profile)));
  getGithubEvents(username)
    .then(res => res.json())
    .then(events => dispatch(fetchEvents(events)));
};

export const handleLogOut = () => ({
  type: "LOGOUT"
});
// remove their username from local storage
// set the local storage logged in value to false

const saveFollowers = followers => ({
  type: "FETCH_FOLLOWERS",
  payload: followers
});

const getGithubFollowing = url => fetch(url);

export const fetchFollowers = followersUrl => dispatch => {
  getGithubFollowing(followersUrl)
    .then(res => res.json())
    .then(followers => dispatch(saveFollowers(followers)));
};
