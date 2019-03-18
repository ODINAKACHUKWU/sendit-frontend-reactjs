import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "./common/Input";
import "../styles/Input.css";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
    this.state = { password: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div className="form-container">
        <form>
          <div className="form-title">
            <p>Log in to your account</p>
          </div>
          <div>
            <label>
              <i className="fa fa-envelope" />
              Email
            </label>
            <Input
              type={"email"}
              name={"email"}
              value={this.state.email}
              placeholder={"Enter email address"}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>
              <i className="fa fa-unlock-alt" />
              Password
            </label>
            <Input
              type={"password"}
              name={"password"}
              value={this.state.password}
              placeholder={"Enter password"}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Input type={"submit"} value={"SIGN IN"} className={"sign-in-btn"} />
          </div>
          <div className="form-footer">
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
