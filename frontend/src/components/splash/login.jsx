import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/reset.css'
import '../styling/splash.css'
import '../styling/login.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            email: '',
            password: ''
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.guestLogin = this.guestLogin.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.login(this.state)
        this.setState({
            email: '',
            username: '',
            password: '',
            address: ''
        })
    }

    guestLogin(e) {
        e.preventDefault();
        this.props.login({ email: 'guest@email.com', password: 'password'});
    }

    updateField(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    readErrors() {
        return Object.values(this.props.errors).map( (err, idx) => {
            return <p key={idx} >{err}</p>
        })
    }

    render() {
        return (
            <div>
                <h1 className="session-header"><Link to="/">green market</Link></h1>
                <div className="login-form">
                    <h1 className="form-text">{this.props.formType}</h1> 
                    {this.props.errors ? this.readErrors() : ''}
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <input type="email" className="login-input" onChange={this.updateField('email')} value={this.state.email} placeholder="Email"/>
                        <br />
                        <input type="password" className="login-input" onChange={this.updateField('password')} value={this.state.password} placeholder="Password"/>
                        <br />
                        <input type="submit" className="login-submit" value={this.props.formType} />
                        <button onClick={this.guestLogin} className="login-submit">Guest Login</button>
                        <h3 className="login-change-form">{this.props.navLink}</h3>
                    { (this.props.loggedIn) ? <button className="logout-header-button" onClick={() => this.props.logout()}>Log Out</button> : '' }
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;