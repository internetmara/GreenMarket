import React from 'react';
import SignupForm from './signup_container';
import LoginForm from './login_container';
import { Route, Switch } from 'react-router';

class Splash extends React.Component {

    render() {
        return (
            <div className="header">
                <h1>GREENMARKET</h1> 
                <Switch>
                    <Route exact path="/signup" component={SignupForm} />
                    <Route exact path="/login" component={LoginForm} />
                </Switch>
            </div>
        )
    }
}

export default Splash;