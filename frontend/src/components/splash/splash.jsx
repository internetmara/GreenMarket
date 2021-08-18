import React from 'react';
import SignupForm from './signup_container';
import LoginForm from './login_container';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
// import '../styling/reset.css'
import '../styling/splash.css'

class Splash extends React.Component {

    render() {
        return (
            <div className="header">
                <h1>green market</h1> 
                <Switch>
                    <Route exact path="/signup" component={SignupForm} />
                    <Route exact path="/login" component={LoginForm} />
                </Switch>
                <div className="session-box">
                    <Link to="/signup"><button className="home-page-button">Sign Up</button></Link>
                    <Link to="/login"><button className="home-page-button">Log In</button></Link>
                </div>
            </div>
        )
    }
}

export default Splash;