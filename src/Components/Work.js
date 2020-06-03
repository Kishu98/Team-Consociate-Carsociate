import React, { useState } from 'react';
import Geocode from "react-geocode";
import Create from './Create.js';
import Join from './Join';

import MapContainer from './Map.js';

function Work() {
    const myStlye = {
        backgroundColor: "White",
        width: "30%",
        height: "100%"
    }

    const [toValue, setToValue] = useState('');
    const [fromValue, setFromValue] = useState('');
    const [toLatitude, setToLat] = useState('');
    const [toLongitute, setToLong] = useState('');
    const [fromLatitude, setFromLat] = useState('');
    const [fromLongitute, setFromLong] = useState('');


    const handleToChange = (e) => {
        e.preventDefault();
        setToValue(e.target.value);
    }

    const handleFromChange = (e) => {
        e.preventDefault();
        setFromValue(e.target.value);
    }

    const toSubmit = (e) => {
        e.preventDefault();
        Geocode.setApiKey("AIzaSyBXxOBJn8bxLEXFwqhDjTHGTQYTfEXFl7I");
        Geocode.enableDebug();
        Geocode.fromAddress(toValue).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
                setToLat(lat);
                setToLong(lng);
            },
            error => {
                console.error(error);
            }
        );
    }

    const fromSubmit = (e) => {
        e.preventDefault();
        Geocode.setApiKey("AIzaSyBXxOBJn8bxLEXFwqhDjTHGTQYTfEXFl7I");
        Geocode.enableDebug();
        Geocode.fromAddress(fromValue).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                setFromLat(lat);
                setFromLong(lng);
            },
            error => {
                console.error(error);
            }
        );
    }
    const [rideType, setRideType] = useState(null);
    return (
        <div className='please'>
            <div style={myStlye}>
                <div id="header">
                    <h1>CarSociate</h1>
                    <img src="../Images/Annotation%202020-06-01%20234245.jpg" />
                </div>

                <form>
                    <label>
                        To:
                     <input type="text" value={toValue} onChange={handleToChange} placeholder="Desitination" />
                    </label>
                    <button onClick={toSubmit}>Submit</button>
                    <br />
                    <label>
                        From:
                     <input type="text" value={fromValue} onChange={handleFromChange} placeholder="From Location" />
                    </label>
                    <button onClick={fromSubmit}>Submit</button>
                    <br />
                </form>
                <button onClick={() => setRideType("Create")}>Create Ride</button>
                <button onClick={() => setRideType("Join")}>Join Ride</button>
                {rideType == 'Create' ? <Create /> : null}
                {rideType == 'Join' ? <Join /> : null}
            </div>
            <MapContainer toLatitude={toLatitude} toLongitude={toLongitute} fromLatitude={fromLatitude} fromLongitude={fromLongitute} />
        </div>
    )
}

export default Work;    