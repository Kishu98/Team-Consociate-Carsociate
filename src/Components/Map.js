import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Geocode from 'react-geocode';

const mapStyles = {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
};
const containerStyle = {
    position: 'absolute',
    width: '70%',
    height: '100%',
    overflow: 'hidden'
}



export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 24.5775,
            lng: 77.7318
        }
    }

    changePos() {

    }

    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={5}
                    style={mapStyles}
                    containerStyle={containerStyle}
                    initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
                    onClick={this.showPos}
                >
                    <Marker
                        title={'Destination'}
                        position={{ lat: this.props.toLatitude, lng: this.props.toLongitude }} />
                    <Marker
                        title={'From'}
                        position={{ lat: this.props.fromLatitude, lng: this.props.fromLongitude }} />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBXxOBJn8bxLEXFwqhDjTHGTQYTfEXFl7I"
})(MapContainer);
//AIzaSyCv6MKZ_bJIbhkwIx76Gd_pNVcObDoIgSk