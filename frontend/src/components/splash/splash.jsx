import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/splash.css'
import '../styling/reset.css'

class Splash extends React.Component {
    render() {
        return (
             <div className="home-container">
                <Link to="/map"><h2 className="go-to-the-map">Go To The Map!</h2></Link>
                <Link to="/products/new"><h2 className="go-to-the-map">Go To The Product Uploader!</h2></Link>
                <Link to="/services/new"><h2 className="go-to-the-map">Go To The Service Uploader!</h2></Link>
            </div>
        )
    }
}

export default Splash;