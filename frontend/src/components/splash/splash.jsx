import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/splash.css'
import '../styling/reset.css'
import '../styling/splash_page.css'

class Splash extends React.Component {
    render() {
        return (
             <div className="home-container">
                 <div className="home-links">
                    <Link to="/products/new"><h2 className="go-to-the-map">List a product</h2></Link>
                    <Link to="/services/new"><h2 className="go-to-the-map">Offer a Service</h2></Link>
                    <Link to="/map"><h2 className="go-to-the-map">Map</h2></Link>
                    <Link to="/user"><h2 className="go-to-the-map">Profile</h2></Link>
                </div>
                 <img className="home-logo" src="/images/Green-Market.png" alt="Logo"></img>
                <div className="splash-first-container">
                    <p>hello I am splash page ~wave~</p>
                </div>
            </div>
        )
    }
}

export default Splash;