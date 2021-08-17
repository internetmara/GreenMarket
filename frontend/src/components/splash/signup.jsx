import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.signup(this.state)
    }

    updateField(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    render() {
        return (
            <div>
                <p>Sign Up Form</p>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Email
                        <input type="email" onChange={this.updateField('email')} value={this.state.email} />
                    </label>
                    <label>Username
                        <input type="text" onChange={this.updateField('username')} value={this.state.username} />
                    </label>
                    <label>Password
                        <input type="password" onChange={this.updateField('password')} value={this.state.password} />
                    </label>
                    <label>Address
                        <input type="text" onChange={this.updateField('address')} value={this.state.address} />
                    </label>
                    <label>Email
                        <input type="text" onChange={this.updateField('email')} value={this.state.email} />
                    </label>
                    <input type="submit" value='Sign Up'/>
                </form>
            </div>
        )
    }
}

export default SignupForm;