import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Circle, Marker } from "react-google-maps";

const Map = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
            onClick={e => props.onMapClick(e)}
        >
            {props.marks.map((mark, index) => (
                <Circle
                    key={index}
                    center={mark}
                    radius={1000}
                    options={{
                        strokeColor: "#ffffff",
                        strokeOpacity: 1,
                        strokeWeight: 2,
                        fillColor: `#ffffff`,
                        fillOpacity: 0.15,
                        zIndex: 1
					}}
					
                />
            ))}
        </GoogleMap>
    ))
);

class ReportsPage extends Component {
    state = {
        marks: []
    };

    setMark = e => {
        this.setState({ marks: [...this.state.marks, e.latLng] });
    };

    deleteMarkS = () => {
        this.setState({
            marks: []
        });
    };

    render() {
        const { marks } = this.state;
        return (
            <div>
                <button onClick={this.deleteMark}>DELETE MARKS</button>
                <Map
                    googleMapURL="http://maps.googleapis.com/maps/api/js?key=AIzaSyDWghK8GYq238Bhvw59QdWLPBkx-vtcc8k"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `800px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    onMapClick={this.setMark}
                    marks={marks}
                />;
            </div>
        );
    }
}

export default ReportsPage;