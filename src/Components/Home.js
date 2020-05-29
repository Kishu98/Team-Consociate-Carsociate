import React, { Component } from 'react';
import '../Home.css';
import fire from '../config/Fire'
import MapContainer from "./Map.js";
import Work from "./Work.js";

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                < div className="Home" >
                    <Work />
                    <MapContainer />
                </div>
                <button onClick={this.logout}>Log Out</button>
            </div >
        );
    }
}

export default Home;
