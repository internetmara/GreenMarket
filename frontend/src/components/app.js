import Splash from './splash/splash';
import React from 'react';
// import { AuthRoute, ProtectedRoute } from "../util/route_util"
import { Switch, Route } from 'react-router';
import IndexComponent from './index/index_container';

const App = () => (
    <div>
        {/* <Header /> */}
        <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/map" component={IndexComponent} />
            {/* <AuthRoute exact path="/" component={Splash} /> */}

            {/* <ProtectedRoute exact path="/shop" component={Index} /> */}
        </Switch>
    </div>
)
    
export default App;