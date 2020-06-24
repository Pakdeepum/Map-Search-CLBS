
import React, { Component } from 'react';
import Map from './Map';

class Home extends Component {
    render(){
        return(
            <div>
                <Map
                    google={this.props.google}
                    center={{
                        lat: 18.706064,
                        lng: 98.981712
                    }}
                    height='300px'
                    zoom={15}
                />
            </div>
        )
    }
}

export default Home;