import React from 'react';
import './Place.css';
import server from '../ServerInterface/server';
// import Review from './Review';
import { Redirect } from 'react-router-dom';

class Place extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = {
            placeName: '',
            address: '',
            place: undefined,
            username: undefined
        };
    };
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    };
    onSubmit = (event) => {
        if(this.state.placeName.trim().length > 0 && this.state.address.trim().length > 0) {
            server.addPlace({name:this.state.placeName, address:this.state.address, username:this.state.username});
            this.setState({place:{name:this.state.placeName, address:this.state.address}})
        };
        event.preventDefault(); //tells the browser not to do default 
    };
    componentDidMount() {
        if (this.props.location) {
            if(this.props.location.state) {
                if(this.props.location.state.place){
                    this.setState({place:this.props.location.state.place})
                }
                if(this.props.location.state.username){
                    this.setState({username:this.props.location.state.username})
                }
            }
        }
    };
    render() {
        if(!this.state.place) {
            if(!this.state.username) {
                return(<Redirect to="/login"></Redirect>)
            }
        return (
            <form onSubmit={this.onSubmit} id="loginForm">
                    <label>Name: </label>
                    <input 
                    type="text" 
                    name="placeName"
                    value={this.state.placeName}
                    onChange={this.handleChange}
                    ></input>
                    <label>  Address: </label>
                    <input
                    type="text"
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                    ></input>
                    <button type="submit"> Add Place </button>
            </form>
        );
        } else {
            return(
                <div>
                    <h2>{this.state.place.name}</h2>
                    {this.state.place.reviews ? this.state.place.reviews.map(y => <div>
                        <h3>{y.rating}</h3>
                        <p>{y.text}</p>
                    </div>) : ''}
                    <p>{this.state.place.address}</p>
                </div>
            )
        }
        
    };
}
export default Place;