import Splash from './splash/splash';
import React from 'react';
import { AuthRoute, ProtectedRoute } from "../util/route_util"
import { Switch } from 'react-router';

const App = () => (
    <div>
        <Splash />
        <Switch>
            {/* <AuthRoute exact path="/" component={Splash} /> */}
            {/* <ProtectedRoute exact path="/" component={Splash} /> */}
        </Switch>
    </div>
)
    
export default App;