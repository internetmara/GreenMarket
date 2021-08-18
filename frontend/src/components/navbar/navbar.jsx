import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/splash.css'
import '../styling/navbar.css'
import '../styling/reset.css'

class Navbar extends React.Component {

    render() {
        return (
           <header className="nav-box">
            <div className="nav-container">
              <div className="logo">
                  <Link to="/"><img src="images/darkgreen.png" className="logo-picture"></img></Link>
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