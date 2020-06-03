import React, { Component } from 'react';

class Ride {
    contructor(props) {
        super(props);
    }

    rendor() {
        <ul>
            {this.props.pass.map((number) =>
                <li>{number}</li>
            );}
        </ul>

    }
}

export default Ride;