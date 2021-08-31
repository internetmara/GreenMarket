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
              <nav className="links">
                <ul>
                    {/* <input type="text" placeholder="Search GreenMarket..." className="search-bar" /> */}
                    <GreetingContainer/>
                    
                </ul>
              </nav>
            </div>
          </header>    
        )
    }
}

export default Navbar;