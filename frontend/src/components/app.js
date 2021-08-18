import Splash from './splash/splash';
import React from 'react';
import { AuthRoute } from "../util/route_util"
import { Switch, Route } from 'react-router';
import IndexComponent from './index/index_container';
import SignupContainer from './splash/signup_container';
import LoginContainer from './splash/login_container';
import ItemShow from './item_show/item_show_container';
// import { ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        {/* <Header /> */}
        <Switch>
            <AuthRoute exact path="/" component={Splash} />
            <Route exact path="/signup" component={SignupContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/map" component={IndexComponent} />
            <Route exact path="/item" component={ItemShow} />
            {/* <ProtectedRoute exact path="/shop" component={Index} /> */}
        </Switch>
    </div>
)
    
export default App;