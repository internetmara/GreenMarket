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
                <h2 className="profile-name">Christopher Dell'Acqua</h2>
                <img src="/images/profilepics/Chris.png" className="profile-pic" alt="Christopher Dell'Acqua"/>
                <div className="profile-links">
                  <a href="https://github.com/cdellacqua123"><img className="social-pic" src="/images/socials/github.png"/></a>
                  <a href="https://www.linkedin.com/in/christopher-dell-acqua-b6765995/"><img className="social-pic" src="/images/socials/linkedin.png"/></a>
                  <a href=""><img className="social-pic" src="/images/socials/userpic.png"/></a>
                </div>
                  <p className="bio">Christopher is a dedicated collector of exotic animals including several thus far unbeknowst to man. Whilst venturing in the jungles of Guatemala, Christopher was bitten by a venomous snake that caused him to lose both legs. Stranded and alone, Christopher built a fort by gnawing off tree branches with his teeth and dragging himself along the forest floor. For 4 months as he recovered he ate nothing but bugs and dirt... but nevertheless, he persisted. After being rescued by locals, Christopher has dedicated his life to computers so he never has to go outside ever again. </p>
              </div>

              <div className="person">
                <h2 className="profile-name">Erik Ingebretson</h2>
                <img src="/images/profilepics/Erik.png" className="profile-pic" alt="Erik Ingebretson"/>
                <div className="profile-links">
                  <a href="https://github.com/erikingebretson"><img className="social-pic" src="/images/socials/github.png"/></a>
                  <a href="https://www.linkedin.com/in/erik-ingebretson/"><img className="social-pic" src="/images/socials/linkedin.png"/></a>
                  <a href=""><img className="social-pic" src="/images/socials/userpic.png"/></a>
                </div>
                <p className="bio">Erik is literally so sensitive and emotional but he has a dark side and you should see him eat a PB&J like DAMN king go OFF. The thing people most misunderstand about Erik is that he never asked to be born. His parents literally never let him do anything fun. He is an avid fan of Linkin Park and Erik believes that actually, it isn't that satanic in terms of the composition. He wishes he could dye his hair black and wear makeup but society literally couldn't handle it. He might not be the strongest, but he has a huge heart so please be gentle because sometimes sensitivity is our greatest strength.</p>
              </div>

               <div className="person">
                <h2 className="profile-name">Mara Finkel</h2>
                <img src="/images/profilepics/Mara.jpeg" className="profile-pic" alt="Mara Finkel"/>
                <div className="profile-links">
                  <a href="https://github.com/internetmara"><img className="social-pic" src="/images/socials/github.png"/></a>
                  <a href="https://www.linkedin.com/in/marafinkel"><img className="social-pic" src="/images/socials/linkedin.png"/></a>
                  <a href=""><img className="social-pic" src="/images/socials/userpic.png"/></a>
                </div>
                <p className="bio">Mara is an entrepreneur and business magnate. She is the founder, CEO, and Chief Engineer at PraxisX and Chesla, Inc.; and founder of The Interesting Company. A centibillionaire, Mara is one of the richest people in the world. She received bachelor's degrees in economics and physics. She moved to California in 1995 to attend Stanford University but decided instead to pursue a business career. The startup was acquired by Cumpaq for $307 million in 1999. Mara co-founded online dank X.com that same year, which merged with Profanity in 2000 to form SlayGal. The company was bought by eGirl in 2002 for $1.5 billion.</p>
               </div>
               <div className="person">
                <h2 className="profile-name">Veronika Pilipenko</h2>
                <img src="/images/profilepics/Veronika.png" className="profile-pic" alt="Veronika Pilipenko"/>
                <div className="profile-links">
                  <a href="https://github.com/VPilipenko334"><img className="social-pic" src="/images/socials/github.png"/></a>
                  <a href="https://www.linkedin.com/in/veronikapilipenko/"><img className="social-pic" src="/images/socials/linkedin.png"/></a>
                  <a href=""><img className="social-pic" src="/images/socials/userpic.png"/></a>
                </div>
                <p className="bio">Veronika came from humble beginnings but after leaving the orphanage she found work hauling water from a local well and lending a hand to sailors when they came ashore to her small village in Eastern Europe. Eventually Veronika was able to secure passage on a cargo ship headed for America where she worked as a seamstress in a garment factory. The owner of the factory took her in and treated her like his own daughter then put Veronika through coding bootcamp so she could secure a bright future for her 7 children. Currently, Veronika lives in a shoe in New England. </p>
              </div>
            </div>
          </div>

        )
    }
}

export default About;