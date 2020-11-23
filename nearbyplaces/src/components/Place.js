import React from 'react';
import './Place.css';
import server from '../ServerInterface/server';

class Place extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = {
            location : [],
            places: [],
        };
    };

    componentDidMount(){
        let data = server.fetchPlaces();
        this.setState({places: data});
    }

    render() {
        const { place } = this.props.item;
        return (
            <div>
                <h2>{place.name}</h2>
                <h3>{place.reviews.rating}</h3> 
                <p>{place.reviews.text}</p>
                <h4>{place.address}</h4>
            </div>
        );
    };
}
export default Place;