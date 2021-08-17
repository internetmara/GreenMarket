import React from 'react';

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
            <div>
                <p>Login Form</p>
                {this.props.errors ? this.readErrors() : ''}
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Email
                        <input type="email" onChange={this.updateField('email')} value={this.state.email}/>
                    </label>
                    <br />
                    <label>Password
                        <input type="password" onChange={this.updateField('password')} value={this.state.password}/>
                    </label>
                    <br />
                    <input type="submit" value='Log In'/>
                </form>
                { (this.props.loggedIn) ? <button onClick={() => this.props.logout()}>Log Out</button> : '' }
            </div>
        )
    }
}

export default LoginForm;