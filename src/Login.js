import React, { Component } from "react";
import { withRouter } from 'react-router';
class Login extends Component {
  constructor(history) {
    super(history);
    this.state = {
      username: "",
      password: "",
      error: false,
    };
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.username === "" || this.state.password === "") {
      this.setState({ error: true });
      return;
    }
    var username = localStorage.getItem("user");
    var password = localStorage.getItem("pass");
    if (this.state.username === username && this.state.password === password) {
      localStorage.setItem('login',true)
      this.props.history.push('/dashboard')
    }
  };
  onChange = (e) => {
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ state: state });
  };

  render() {
    return (
      <div align="center">
        <h1>Login Form</h1>
        <form onSubmit={this.onFormSubmit}>
          <label>Username:</label>
          <br></br>
          <div>
            <input
              type="text"
              name="username"
              required={true}
              onChange={this.onChange}
              value={this.state.username}
              placeholder="Enter your username"
            />
          </div>
          <br></br>
          <br></br>
          <label>Password:</label>
          <br></br>
          <input
            type="password"
            required={true}
            name="password"
            onChange={this.onChange}
            value={this.state.password}
            placeholder="Enter your Password"
          />

          <br></br>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default withRouter(Login);
