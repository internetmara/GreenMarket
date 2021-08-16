import React from 'react';
import {AuthRoute, ProtectedRoute} from "../util/route_util"
import { Switch } from 'react-router';
import Splash from './splash/splash_component'

const App = () => (
    <Switch>
        <AuthRoute exact path="/" component={Spash} />
    </Switch>
)

export default App;