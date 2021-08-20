import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/splash.css'
import '../styling/reset.css'

class Splash extends React.Component {
    render() {
        return (
             <div className="home-container">
                 <img className="home-logo" src="/images/Green-Market.png"></img>
                 <div className="login-signup2">
                    <button className="home-page-button2"><Link to="/login">Log in</Link></button>
                    &nbsp;
                    <button className="home-page-button2"><Link to="/signup">Sign up</Link></button>
                </div>
                <Link to="/map"><h2 className="go-to-the-map">Go To The Map!</h2></Link>
                <Link to="/products/new"><h2 className="go-to-the-map">Go To The Product Uploader!</h2></Link>
                <Link to="/services/new"><h2 className="go-to-the-map">Go To The Service Uploader!</h2></Link>
            </div>
        )
    }
}

export default Splash;