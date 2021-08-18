import React from 'react';
import { Link } from 'react-router-dom';

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

    readErrors() {
        return Object.values(this.props.errors).map( (err, idx) => {
            return <p key={idx} >{err}</p>
        })
    }

    render() {
        return (
            <div>
                <h1 className="session-header"><Link to="/">green market</Link></h1>
                <div className="signup-form">
                    <h1 className="form-text">{this.props.formType}</h1> 
                    {this.props.errors ? this.readErrors() : ''}
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <input type="email" className="login-input" onChange={this.updateField('email')} value={this.state.email} placeholder="Email" />
                        <br />
                        <input type="text" className="login-input" onChange={this.updateField('username')} value={this.state.username} placeholder="Username" />
                        <br />
                        <input type="password" className="login-input" onChange={this.updateField('password')} value={this.state.password} placeholder="Password" />
                        <br />
                        <input type="text" className="login-input" onChange={this.updateField('address')} value={this.state.address} placeholder="Address"/>
                        <br />
                        <input type="submit" className="login-submit" value={this.props.formType} />
                    </form>
                        <h3 className="change-form">{this.props.navLink}</h3>
                </div>
            </div>
        )
    }
}

export default SignupForm;