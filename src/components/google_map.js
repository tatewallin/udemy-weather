import React, {Component} from 'react';

class GoogleMap extends Component {

    componentDidMount(){
        // Map takes in a few html node where we want to render this map to
        // find element on screen and render the map into it
        // how interaction with 3rd party lib usually work
        //NOTE the google map api is imported in the index.js
        new google.maps.Map(this.refs.map, {
            zoom:12,
            center:{
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render(){
        // this.refs.map
        return <div ref="map" />;
    }
}

export default GoogleMap;