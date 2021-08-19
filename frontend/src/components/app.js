import Splash from './splash/splash';
import React from 'react';
import { AuthRoute, ProtectedRoute } from "../util/route_util"
import { Switch, Route } from 'react-router';
import IndexComponent from './index/index_container';
import SignupContainer from './splash/signup_container';
import LoginContainer from './splash/login_container';
import ItemShow from './item_show/item_show_container';
import UploadProduct from './index/forms/product_create_container';
import UploadService from './index/forms/service_container';

import Navbar from './navbar/navbar';
// import { ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Splash} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <AuthRoute exact path="/login" component={LoginContainer} />
            <ProtectedRoute exact path="/map" component={IndexComponent} />
            <Route exact path="/item" component={ItemShow} />
            {/* <ProtectedRoute exact path="/shop" component={Index} /> */}
            <ProtectedRoute exact path="/products/new" component={UploadProduct} />
            <ProtectedRoute exact path="/services/new" component={UploadService} />
        </Switch>
    </div>
)
    
export default App;