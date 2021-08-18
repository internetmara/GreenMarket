import React from 'react';
import SignupForm from './signup_container';
import LoginForm from './login_container';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import '../styling/reset.css'
import '../styling/splash.css'
import '../styling/navbar.css'

class Splash extends React.Component {

    render() {
        return (
            <h1> Green Market</h1>
        )
    }
}






export default Splash;