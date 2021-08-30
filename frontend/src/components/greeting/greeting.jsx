import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../styling/reset.css';

class Greeting extends React.Component {
  
  handleLogout = () => {
    this.props.logout()
    this.props.history.push("/login")
  }

  sessionLinks = () => (
    <nav className="login-signup">
      <button className="home-page-button"><Link to="/login">Log in</Link></button>
      &nbsp;
      <button className="home-page-button"><Link to="/signup">Sign up</Link></button>
    </nav>
  );

  personalGreeting = () => (
    <hgroup className="header-group">
      <h1 className="personal-welcome">Welcome {this.props.currentUser.username}!</h1>
      <button className="logout-header-button" onClick={() => this.handleLogout()}>Log Out</button>
    </hgroup>
  );

  render() {
    return this.props.isAuthenticated ? this.personalGreeting() : this.sessionLinks();
  }
};

export default withRouter(Greeting);