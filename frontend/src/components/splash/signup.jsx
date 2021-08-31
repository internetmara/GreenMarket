import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/reset.css'
import '../styling/login.css'
import Geocode from "react-geocode";
const key = require("../../config/keys").googleMapsKey;


class SignupForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
                email: '',
                username: '',
                password: '',
                address: '',
                coordsLat: 0,
                coordsLng: 0,
                badAddress: 'n'
                // avatar: '',
                // products: [],
                // services: [],
                // reviews: [],
                // buyerPoints: 0,
                // sellerPoints: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async getGeo(address) {
        Geocode.setApiKey(key);
        Geocode.setLanguage("en");
        Geocode.setRegion("us");
        Geocode.setLocationType("APPROXIMATE");

        let lat = 0;
        let lng = 0;

        await Geocode.fromAddress(address).then(res => {
            lat = res.results[0].geometry.location.lat
            lng = res.results[0].geometry.location.lng
            this.setState({ coordsLat: lat, coordsLng: lng })
        })
    }

    async handleSubmit(e) {
        e.preventDefault()

        this.setState({ badAddress: 'n' })
        await this.getGeo(this.state.address).catch(res => { 
            this.setState({ badAddress: 'y' }) 
        })
        if (this.state.badAddress === 'y') return null;

        delete this.state.badAddress
        this.props.signup(this.state)
        .then( res => {
            if (res.type !== "RECEIVE_SESSION_ERRORS" ) {
                this.props.login(this.state)
                this.setState({
                    email: '',
                    username: '',
                    password: '',
                    address: ''
                })
                this.props.clearSessionErrors()
            }
        })
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
                    {this.state.badAddress === 'y' ? <p>Invalid Address Input</p> : '' }
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <input type="email" className="login-input" onChange={this.updateField('email')} value={this.state.email} placeholder="Email" />
                        <br />
                        <input type="text" className="login-input" onChange={this.updateField('username')} value={this.state.username} placeholder="Username" />
                        <br />
                        <input type="password" className="login-input" onChange={this.updateField('password')} value={this.state.password} placeholder="Password" />
                        <br />
                        <input type="text" className="login-input" onChange={this.updateField('address')} value={this.state.address} placeholder="Address"/>
                        <br />
                        <button type="submit"  className="login-submit">{this.props.formType}</button>
                    </form>
                    <h3 className="change-form">{this.props.navLink}</h3>
                </div>
            </div>
        )
    }
}

export default SignupForm;