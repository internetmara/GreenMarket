import React from 'react';
import '../styling/about.css'
import '../styling/reset.css'

class About extends React.Component {

    render() {
        return (
          <div className="about-container">
            <h1 className="creators">Creators</h1>
            <div className="creator-links">
              
               <div className="person">
                <img src="/images/profilepics/Chris.png" className="profile-pic" alt="Christopher Dell'Acqua"/>
                <h2 className="profile-name">Christopher Dell'Acqua</h2>
                <div className="profile-links">
                  <a href="https://github.com/cdellacqua123"><img className="social-pic" src="/images/socials/github.png"/></a>
                  <a href="https://www.linkedin.com/in/christopher-dell-acqua-b6765995/"><img className="social-pic" src="/images/socials/linkedin.png"/></a>
                  <a href=""><img className="social-pic" src="/images/socials/userpic.png"/></a>
                </div>
              </div>

              <div className="person">
                <img src="/images/profilepics/Erik.png" className="profile-pic" alt="Erik Ingebretson"/>
                <h2 className="profile-name">Erik Ingebretson</h2>
                <div className="profile-links">
                  <a href="https://github.com/erikingebretson"><img className="social-pic" src="/images/socials/github.png"/></a>
                  <a href="https://www.linkedin.com/in/erik-ingebretson/"><img className="social-pic" src="/images/socials/linkedin.png"/></a>
                  <a href=""><img className="social-pic" src="/images/socials/userpic.png"/></a>
                </div>
              </div>

               <div className="person">
                <img src="/images/profilepics/Mara.jpeg" className="profile-pic" alt="Mara Finkel"/>
                <h2 className="profile-name">Mara Finkel</h2>
                <div className="profile-links">
                  <a href="https://github.com/internetmara"><img className="social-pic" src="/images/socials/github.png"/></a>
                  <a href="https://www.linkedin.com/in/marafinkel"><img className="social-pic" src="/images/socials/linkedin.png"/></a>
                  <a href=""><img className="social-pic" src="/images/socials/userpic.png"/></a>
                </div>
              </div>

               <div className="person">
                <img src="/images/profilepics/Veronika.png" className="profile-pic" alt="Veronika Pilipenko"/>
                <h2 className="profile-name">Veronika Pilipenko</h2>
                <div className="profile-links">
                  <a href="https://github.com/VPilipenko334"><img className="social-pic" src="/images/socials/github.png"/></a>
                  <a href="https://www.linkedin.com/in/veronikapilipenko/"><img className="social-pic" src="/images/socials/linkedin.png"/></a>
                  <a href=""><img className="social-pic" src="/images/socials/userpic.png"/></a>
                </div>
              </div>
            </div>
          </div>

        )
    }
}

export default About;