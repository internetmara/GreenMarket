import Splash from './splash/splash';
import React from 'react';
// import {AuthRoute, ProtectedRoute} from "../util/route_util"
// import { Switch } from 'react-router';
// const Splash = require('./splash/splash_container');

const App = () => (
    <div>
        <Splash />
        <Switch>
            <AuthRoute exact path="/" component={Spash} />
        </Switch>
    </div>
)
    
export default App;