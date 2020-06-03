import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Login.css';
import fire from '../config/Fire';
import MapContainer from '../Components/Map';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: '',
            name: '',
            pNumber: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).then((u) => { console.log(u) })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <div className="col-md-6 login">
                <form>
                    <div className="form-group">
                        <label >Name</label>
                        <input value={this.state.name} onChange={this.handleChange} type="text" name="name" className="form-control" placeholder="Enter Name" />
                        <br />
                        <label >Phone Number</label>
                        <input value={this.state.pNumber} onChange={this.handleChange} type="number" name="number" className="form-control" placeholder="Phone Number" />
                        <br />
                        <label for="exampleInputEmail1">Email address</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
                    <button onClick={this.signup} style={{ marginLeft: '25px' }} className="btn btn-success">Signup</button>
                </form>
                <MapContainer />

            </div >
        );
    }
}
export default Login;