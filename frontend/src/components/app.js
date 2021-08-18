import Splash from './splash/splash';
import React from 'react';
// import { AuthRoute, ProtectedRoute } from "../util/route_util"
import { Switch, Route } from 'react-router';
import IndexComponent from './index/index_container';import SignupForm from './splash/signup';
import SignupContainer from './splash/signup_container';
import LoginContainer from './splash/login_container';

const App = () => (
    <div>
        {/* <Header /> */}
        <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/map" component={IndexComponent} />
            <Route exact path="/signup" component={SignupContainer} />
            <Route exact path="/login" component={LoginContainer} />
            {/* <AuthRoute exact path="/" component={Splash} /> */}

            {/* <ProtectedRoute exact path="/shop" component={Index} /> */}
        </Switch>
    </div>
)
    
export default App;