import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let username = this.state.username
    let password = this.state.password
    if (username !== "" && password !== "") {
      this.props.handleLogin(username, password)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;