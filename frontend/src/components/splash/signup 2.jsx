import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
                email: '',
                username: '',
                password: '',
                address: ''
                // avatar: '',
                // products: [],
                // services: [],
                // reviews: [],
                // buyerPoints: 0,
                // sellerPoints: 0
        }
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
                    <br />
                    <label>Username
                        <input type="text" onChange={this.updateField('username')} value={this.state.username} />
                    </label>
                    <br />
                    <label>Password
                        <input type="password" onChange={this.updateField('password')} value={this.state.password} />
                    </label>
                    <br />
                    <label>Address
                        <input type="text" onChange={this.updateField('address')} value={this.state.address} />
                    </label>
                    <br />
                    <input type="submit" value='Sign Up'/>
                </form>
            </div>
        )
    }
}

export default SignupForm;