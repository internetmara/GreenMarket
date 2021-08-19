import '../styling/reset.css'
import '../styling/splash.css'
import '../styling/navbar.css'

export default () => (
    <header>
        <div className="container">
            <div className="logo">
                <h1><img src="images/darkgreen.png" className="logo-picture" alt="logo-picture"></img></h1>
            </div>
            <nav className="links">
                <ul>
                    <Link to="/signup"><button className="home-page-button" >Sign Up</button></Link>
                    <Link to="/login"><button className="home-page-button">Log In</button></Link>
                </ul>
            </nav>

        </div>
    </header>
);