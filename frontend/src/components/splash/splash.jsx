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
                {/* <img src="/images/4.png"/> */}

                    <div className="splash-first-container">
                        <p>hello I am greeting container ~wave~</p>
                    </div>

                        <br/>

                         <div className="splash-first-container2"> 
                                <div className="environment-container1">
                                    <img src="/images/1.png" className="environment-container2-image"/>
                                        <h2>Our Mission</h2>
                                    hello my name is veronika hi 
                                </div>

                        <div className="environment-container2"><img src="/images/2.png" className="environment-container2-image"/>
                                        <h2>It's Important!</h2>
                                        hi
        
                                </div>

                        <div className="environment-container3"><img src="/images/3.png" className="environment-container2-image"/>
                                        <h2>The Future</h2>
                                        hallo
                                </div>
                                {/* <div className="environment-container"><img src="/images/4.png"/> </div> */}
                        </div>

                        <br/>
                            <div className="splash-first-container">
                                <p>api will potentially go here</p>
                            </div>
                </div>
        )
    }
}

export default Splash;