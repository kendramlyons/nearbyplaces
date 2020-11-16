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
            <img src = {require('../images/'+this.props.item.picture)} 
                alt={this.props.item.picture} id='flowerpic'></img>
            <br/>
            <div id='choices'>
                {this.props.item.choices.map(c => 
                    <div>
                    <input type="radio" id={c} name="choice" value={c} onChange={this.saveAnswer} 
                        checked={this.state.userAnswers[this.props.cursor] === c ? 'checked' : ''}></input>
                    <label for={c}>{c}</label><br></br>
                    </div>
                    )}
            </div>
        </div>);
    };
}
export default Place;