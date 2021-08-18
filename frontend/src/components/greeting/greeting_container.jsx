import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Log in</Link>
      &nbsp;
      <button className="sign-up-button"><Link to="/signup">Sign up</Link></button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <button className="logout-header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
