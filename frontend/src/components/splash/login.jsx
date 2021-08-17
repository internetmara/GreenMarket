import React from 'react';
import '../styling/splash.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.login(this.state)
    }

    updateField(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    render() {
        return (
            <div className="login-form">
                <p>Login Form</p>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="email" className="login-input" onChange={this.updateField('email')} value={this.state.email} placeholder="Email"/>
                    <br />
                    <input type="password" className="login-input" onChange={this.updateField('password')} value={this.state.password} placeholder="Password"/>
                    <br />
                    <input type="submit" className="login-submit" value='Log In'/>
                </form>
                { (this.props.loggedIn) ? <button onClick={() => this.props.logout()}>Log Out</button> : '' }
            </div>
        )
    }
}

export default LoginForm;