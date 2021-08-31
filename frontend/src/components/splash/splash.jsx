import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/splash.css'
import '../styling/reset.css'
import '../styling/splash.css'

class Splash extends React.Component {
    render() {
        return (
            <div className="home-container">
                 <img className="home-logo" src="/images/Green-Market.png" alt="Logo"></img>
                {/* <img src="/images/4.png"/> */}

                    <div className="splash-first-container">
                        <p>hello I am greeting container ~wave~</p>
                    </div>

                        <br/>

                         <div className="splash-first-container2"> 
                                <div className="environment-container1">
                                    <img src="/images/1.png" className="environment-container2-image"/>
                                        <h2>Who are we?</h2>
                                        <br/>
                                    Green Market is a sustainanble, community-driven, online service where neighbors can trade goods and services.
                                </div>

                        <div className="environment-container2"><img src="/images/2.png" className="environment-container2-image"/>
                                        <h2>Our Mission</h2>
                                            <br/>
                                     Our mission is to help local relationships form to build a more connected world. Exchanging goods and services will do just that.
                                </div>

                        <div className="environment-container3"><img src="/images/3.png" className="environment-container2-image"/>
                                        <h2>Our Vision</h2>
                                        <br/>
                                    In an increasingly disconnected world, Green Market is here to help neighbors connect sustainably.
                                </div>
                        </div>

                        <br/>
                            <div className="splash-first-container">
                                <p>API will potentially go here</p>
                            </div>
                </div>
        )
    }
}

export default Splash;