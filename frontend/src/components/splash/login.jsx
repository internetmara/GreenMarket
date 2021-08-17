import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            id: this.props.user.id,
            email: '',
            password: ''
        }
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
            <div>
                <p>Login Form</p>
                <form >
                    <label>Email
                        <input type="email" onChange={this.updateField('email')} value={this.state.email}/>
                    </label>
                    <label>Password
                        <input type="password" onChange={this.updateField('password')} value={this.state.password}/>
                    </label>
                </form>
            </div>
        )
    }
}

export default LoginForm;