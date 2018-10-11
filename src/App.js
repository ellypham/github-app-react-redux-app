import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile.js";
import Login from "./Login.js";
import {
  handleChangeUsername,
  login,
  handleLogOut,
  fetchFollowers
} from "./actions.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: "",
      firstname: "",
      profile: {},
      followers: [],
      events: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.loggedIn !== this.props.loggedIn) {
      // I'm not quite sure I understand what's going on here
      if (this.props.loggedIn) {
        this.props.fetchFollowers(this.props.profile.followers_url);
      }
    }
  }

  // componentDidMount() {
  // check if the username is stored in local storeage if logged in true is in local storage
  // if the username is in local storage fetche the data from the github API and set logged in to true
  // }

  render() {
    return (
      <div className="App">
        <h1>Github Developer</h1>
        {this.props.loggedIn ? (
          <Profile
            {...this.props.profile}
            handleLogOut={this.props.handleLogOut}
            followers={this.props.followers}
            events={this.props.events}
          />
        ) : (
          <Login
            handleChangeUsername={this.props.handleChangeUsername}
            username={this.props.username}
            handleLogin={() => this.props.login(this.props.username)}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  handleChangeUsername,
  login,
  handleLogOut,
  fetchFollowers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
