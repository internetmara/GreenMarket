import Splash from './splash/splash';
import React from 'react';
// import { AuthRoute, ProtectedRoute } from "../util/route_util"
import { Switch } from 'react-router';
import SignupForm from './splash/signup_container';
import LoginForm from './splash/login_container';
import SimpleMap from './map/map';
import { Route } from 'react-router';

const App = () => (
    <div>
        <Splash />
        <SignupForm />
        <LoginForm />
        
        <Switch>
            <Route exact path="/map" component={SimpleMap} />
            {/* <AuthRoute exact path="/" component={Splash} /> */}
            {/* <ProtectedRoute exact path="/" component={Splash} /> */}
        </Switch>
    </div>
)
    
export default App;