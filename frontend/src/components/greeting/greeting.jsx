import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/reset.css';


const Greeting = ({ currentUser, logout, isAuthenticated }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button className="home-page-button"><Link to="/login">Log in</Link></button>
      &nbsp;
      <button className="home-page-button"><Link to="/signup">Sign up</Link></button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h1 className="personal-welcome">Welcome {currentUser.username}!</h1>
      <button className="logout-header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return isAuthenticated ? personalGreeting() : sessionLinks();
};

export default Greeting;