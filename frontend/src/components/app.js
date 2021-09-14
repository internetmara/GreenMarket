import Splash from './splash/splash';
import React from 'react';
import { AuthRoute, ProtectedRoute } from "../util/route_util"
import { Switch, Route, Redirect } from 'react-router';
import Navbar from './navbar/navbar';
import SignupContainer from './splash/signup_container';
import LoginContainer from './splash/login_container';
import userShow from './user_show/user_show_container';
import UploadProduct from './index/forms/product_create_container';
import UploadService from './index/forms/service_container';
import IndexComponent from './index/index_container';
import serviceShow from './item_show/service_item_container'
import productShow from './item_show/product_item_container'
import "./styling/reset.css"
import About from './about/about';

const App = () => (
    <div>
        <Navbar/>
        <Switch>
            <Route exact path="/about" component={About} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <AuthRoute exact path="/login" component={LoginContainer} />
            <ProtectedRoute exact path="/map" component={IndexComponent} />
            <ProtectedRoute exact path="/user" component={userShow} />
            <ProtectedRoute exact path="/service/:itemId" component={serviceShow} />
            <ProtectedRoute exact path="/product/:itemId" component={productShow} />
            <ProtectedRoute exact path="/products/new" component={UploadProduct} />
            <ProtectedRoute exact path="/services/new" component={UploadService} />
            <Route exact path="/" component={Splash} />
            <Redirect to='/' />
        </Switch>
    </div>
)
    
export default App;