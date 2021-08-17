import React from 'react';
import SignupForm from './signup_container';
import LoginForm from './login_container';

class Splash extends React.Component {

    render() {
        return (
            <div className="header">
                <h1>GREENMARKET</h1> 
                <SignupForm />
                <LoginForm />
            </div>
        )
    }
}

export default Splash;