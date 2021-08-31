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
                <img src="/images/Chris.png" className="profile-pic" alt="Christopher Dell'Acqua"/>
                <h2 className="profile-name">Christopher Dell'Acqua</h2>
                <div className="profile-links">
                  <a href="https://github.com/cdellacqua123">Github</a>
                  <a href="https://www.linkedin.com/in/christopher-dell-acqua-b6765995/">Linkedin</a>
                  <a href="">Personal Site</a>
                </div>
              </div>

              <div className="person">
                <img src="/images/Erik.png" className="profile-pic" alt="Erik Ingebretson"/>
                <h2 className="profile-name">Erik Ingebretson</h2>
                <div className="profile-links">
                  <a href="https://github.com/erikingebretson">Github</a>
                  <a href="https://www.linkedin.com/in/erik-ingebretson/">Linkedin</a>
                  <a href="">Personal Site</a>
                </div>
              </div>

               <div className="person">
                <img src="/images/Mara.jpeg" className="profile-pic" alt="Mara Finkel"/>
                <h2 className="profile-name">Mara Finkel</h2>
                <div className="profile-links">
                  <a href="https://github.com/internetmara">Github</a>
                  <a href="https://www.linkedin.com/in/marafinkel">Linkedin</a>
                  <a href="">Personal Site</a>
                </div>
              </div>

               <div className="person">
                <img src="/images/Veronika.png" className="profile-pic" alt="Veronika Pilipenko"/>
                <h2 className="profile-name">Veronika Pilipenko</h2>
                <div className="profile-links">
                  <a href="https://github.com/VPilipenko334">Github</a>
                  <a href="https://www.linkedin.com/in/veronikapilipenko/">Linkedin</a>
                  <a href="">Personal Site</a>
                </div>
              </div>
            </div>
          </div>

        )
    }
}

export default About;