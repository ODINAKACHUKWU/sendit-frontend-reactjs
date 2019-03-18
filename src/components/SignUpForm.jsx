import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "./common/Input";
import "../styles/Input.css";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "" };
    this.state = { lastName: "" };
    this.state = { phoneNumber: "" };
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
      <div className="form-container sign-up-form">
        <form>
          <div className="form-title">
            <p>
              Please fill in this form to create your account and start making
              delivery order!
            </p>
          </div>
          <div>
            <label>
              <i className="fa fa-user" />
              First name
            </label>
            <Input
              type={"text"}
              name={"firstName"}
              value={this.state.firstName}
              placeholder={"Enter firstname"}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>
              <i className="fa fa-user" />
              Last name
            </label>
            <Input
              type={"text"}
              name={"lastName"}
              value={this.state.lastName}
              placeholder={"Enter lastname"}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>
              <i className="fa fa-phone" />
              Phone number
            </label>
            <Input
              type={"tel"}
              name={"phoneNumber"}
              value={this.state.phoneNumber}
              placeholder={"Enter phone number"}
              onChange={this.handleChange}
            />
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
            <Input
              type={"submit"}
              value={"SIGN UP"}
              className={"sign-in-btn"}
            />
          </div>
          <div className="form-footer">
            <p>
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
