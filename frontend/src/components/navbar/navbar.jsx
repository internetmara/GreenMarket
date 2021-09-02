import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/splash.css'
import '../styling/navbar.css'
import '../styling/reset.css'
import GreetingContainer from '../greeting/greeting_container';

class Navbar extends React.Component {

    render() {
        return (
           <header className="nav-box">
            <div className="nav-container">
              <div className="logo">
                  <Link to="/"><img src="images/darkgreen.png" alt="logo" className="logo-picture"></img></Link>
              </div>
              <div className="home-links">
                  <div>
                    <Link to="/products/new"><h2 className="go-to-the-map">List a product</h2></Link>
                  </div>
                  <div>
                    <Link to="/services/new"><h2 className="go-to-the-map">Offer a Service</h2></Link>
                  </div>
                  <div>
                    <Link to="/map"><h2 className="go-to-the-map">Map</h2></Link>
                  </div>
                  <div>
                    <Link to="/user"><h2 className="go-to-the-map">Profile</h2></Link>
                  </div>
                  <div>
                    <Link to="/about"><h2 className="go-to-the-map">About Us</h2></Link>
                  </div>
                </div>
              <div className="greeting">
                    <GreetingContainer/>
              </div>
            </div>
          </header>    
        )
    }
}

export default Navbar;