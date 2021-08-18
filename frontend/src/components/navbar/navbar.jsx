import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/splash.css'
import '../styling/navbar.css'
import '../styling/reset.css'

class Navbar extends React.Component {

    render() {
        return (
           <header>
            <div className="container">
              <div className="logo">
                  <h1><img src="images/darkgreen.png" className="logo-picture"></img></h1>
              </div>
              <nav className="links">
                <ul>
                    {/* <input type="text" placeholder="Search GreenMarket..." className="search-bar" /> */}
                    <Link to="/signup"><button className="home-page-button">Sign Up</button></Link>
                    <Link to="/login"><button className="home-page-button">Log In</button></Link>
                </ul>
              </nav>
            </div>
          </header>    
        )
    }
}

export default Navbar;