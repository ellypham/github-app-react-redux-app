import React, { Component } from "react";
import Profile from "./Profile.js";
import Login from "./Login.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: "",
      firstname: "",
      profile: {},
      followers: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin() {
    this.githubUser(this.state.username)
      .then(res => res.json())
      .then(data => this.setState({ profile: data, loggedIn: true }));
  }

  handleLogOut() {
    this.setState({
      loggedIn: false,
      profile: {},
      username: ""
    });
    // remove their username from local storage
    // set the local storage logged in value to false
  }

  gethubUser(username) {
    return fetch(`https://api.github.com/users/${username}`);
  }

  getGithubFollowing(url) {
    return fetch(url);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.loggedIn !== this.state.loggedIn) {
      // I'm not quite sure I understand what's going on here
      if (this.state.loggedIn) {
        this.getGithubFollowing(this.state.profile.followers_url)
          .then(res => res.json())
          .then(data => this.setState({ followers: data }))
          .catch(err => this.setState({ error: err }));
      }
    }
  }

  componentDidMount() {
    // check if the username is stored in local storeage if logged in true is in local storage
    // if the username is in local storage fetche the data from the github API and set logged in to true
  }

  render() {
    return (
      <div className="App">
        <h1>Github Developer</h1>
        {this.state.loggedIn ? (
          <Profile
            {...this.state.profile}
            handleLogOut={this.handleLogOut}
            followers={this.state.followers}
          />
        ) : (
          <Login
            handleChange={this.handleChange}
            username={this.state.username}
            firstName={this.state.firstName}
            handleLogin={this.handleLogin}
          />
        )}
      </div>
    );
  }
}

export default App;
