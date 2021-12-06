import React, { Component } from "react";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Search from "../wootlab/elements/search";
const center = {
  lat: 9.029411,
  lng: 7.492277,
};
const style = {
  width: "50%",
  height: "50%",
};

export class MapContainer extends Component {
  render() {
    return (
      <div className="mapContainer">
        <div>
          <Search />
        </div>
        <Map google={this.props.google} zoom={8} center={center}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          {/* <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow> */}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);
