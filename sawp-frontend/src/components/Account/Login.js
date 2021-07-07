import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar from '../layout/navbar';
import { login } from "../../actions/auth";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;
    return (
      <>
      <Navbar />
      <div className="container login">
        <div className="row text-center">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Login for SAWP</h5>
            </div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    className="form-control input-sm"
                    onChange={this.onChange}
                    value={username}
                    placeholder="Enter Username..."
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    onChange={this.onChange}
                    value={password}
                    className="form-control input-sm"
                    placeholder="Password"
                  />
                </div>

                <input
                  type="submit"
                  value="Login"
                  className="btn btn-info btn-block"
                />
                <div>
                  Doesn't have a account?{" "}
                  <Link to="/signup">Create account</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
