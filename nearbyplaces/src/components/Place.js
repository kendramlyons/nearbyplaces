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
        return (<div>
            <div id='place'>
                {this.props.item.name}
                {this.props.item.address}
                {this.props.item.reviews}
            </div>
        </div>);
    };
}
export default Place;