import React from 'react';
import './App.css';

import MapContainer from "../src/Components/Map.js";
import Work from "../src/Components/Work.js";

function App() {
    return (
        <div className="App">
            <Work />
            <MapContainer />
        </div>
    );
}

export default App;
