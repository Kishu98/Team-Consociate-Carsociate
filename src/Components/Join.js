import React, { useState, useEffect, createElement } from 'react';
import firebase from 'firebase';
import fire from '../config/Fire';


function Join() {

    const [passen, setPassen] = useState('');
    const [tim, setTim] = useState('');
    const [size, setSize] = useState();
    const [j, setJ] = useState(0);

    var pass = new Array();
    var time = new Array();

    const getData = () => {
        var ticketRef = firebase.database().ref('Ticket');
        var refOn = ticketRef.on('value', gotData, eerData);
    }
    const gotData = (data) => {
        var ticket = data.val();
        var keys = Object.keys(ticket);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            pass[i] = ticket[k].Passengers;
            time[i] = ticket[k].Time;

        }
        console.log(pass);
        console.log(time);
    }

    useEffect(() => {
        getData();
    });


    const eerData = () => {
        console.log("Error");
    }

    return (
        <div>

            <h3>These are the available rides right now.</h3>
            <ol id='rideList'>

                {pass.map(item => (
                    <li key={item}>Number of passengers{item}</li>
                ))}

            </ol>

        </div>
    )
}

export default Join;