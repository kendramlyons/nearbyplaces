import React from 'react';
import './Place.css';

class Place extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = {
            location : []
        };
    };

    render() {
        const { place } = this.props.item;
        return (
            <div id='place'>
                {place.name}
                {place.address}
                {place.reviews}
            </div>
        );
    };
}
export default Place;