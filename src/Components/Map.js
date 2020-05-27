import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

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

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                containerStyle={containerStyle}
                initialCenter={{
                    lat: 22.481308,
                    lng: 88.309909
                }}
            >
                <Marker
                    title={'My Home'}
                    name={'Home'}
                    position={{ lat: 22.481308, lng: 88.309909 }} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: '{Hello}'
})(MapContainer);