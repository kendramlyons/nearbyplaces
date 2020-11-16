import React from 'react';
import './Place.css';

class Place extends React.Component {
    constructor(props) { //'props' is always passed to constructor
        super(props); //have to have 'super' or else error
        this.state = {
            location : []
        };
    };

    render() {
        return (<div>
            <div id='place'>
                {this.props.item.title}
            </div>
        </div>);
    };
}
export default Place;