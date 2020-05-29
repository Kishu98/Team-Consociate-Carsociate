import React, { useState } from 'react';
import Geocode from "react-geocode";
import Create from './Create.js';
import Join from './Join';

function Work() {
    const myStlye = {
        backgroundColor: "White",
        width: "30%",
        height: "100%"
    }
    Geocode.setApiKey("AIzaSyAkuWjK779A9Y8XAIvkA0Qjo05j6z-xxYM");
    Geocode.setLanguage("en");
    Geocode.setRegion("es");
    Geocode.enableDebug();
    Geocode.fromAddress("Eiffel Tower").then(
        response => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng);
        },
        error => {
            console.error(error);
        }
    );

    const [rideType, setRideType] = useState(null);
    const [visibleCreate, setVisibleCreate] = useState('false');
    const [visibleJoin, setVisibleJoin] = useState('true');

    return (
        <div style={myStlye}>
            <h1>CarSociate</h1>
            <form>
                <label>
                    To:
                     <input type="text" name="this" />
                </label>
                <input type="submit" name="submit" />
                <br />
                <label>
                    From:
                     <input type="text" name="name" />
                </label>
                <input type="submit" name="submit" />
            </form>
            <button onClick={() => setRideType("Create")}>Create Ride</button>
            <button onClick={() => setRideType("Join")}>Join Ride</button>
            {rideType == 'Create' ? <Create /> : null}
            {rideType == 'Join' ? <Join /> : null}
        </div>
    )
}

export default Work;    