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

    readErrors() {
        return Object.values(this.props.errors).map( (err, idx) => {
            return <p key={idx} >{err}</p>
        })
    }

    render() {
        return (
            <div className="login-form">
                <h1 className="form-text">{this.props.formType}</h1> 
                {this.props.errors ? this.readErrors() : ''}
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="email" className="login-input" onChange={this.updateField('email')} value={this.state.email} placeholder="Email"/>
                    <br />
                    <input type="password" className="login-input" onChange={this.updateField('password')} value={this.state.password} placeholder="Password"/>
                    <br />
                    <input type="submit" className="login-submit" value={this.props.formType} />
                </form>
                    <h3 className="change-form">{this.props.navLink}</h3>
                { (this.props.loggedIn) ? <button onClick={() => this.props.logout()}>Log Out</button> : '' }
            </div>
        )
    }
}

export default LoginForm;