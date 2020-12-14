import React from 'react';
import './Place.css';
import server from '../ServerInterface/server';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Rating from '@material-ui/lab/Rating';
// import { Rating } from '@material-ui/lab';

class Place extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeName: '',
            address: '',
            place: undefined,
            username: '',
            reviewText: '',
            reviewRating: '*****'
        };
    };
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value });
    };
    onSubmit = (event) => {
        if (this.state.placeName.trim().length > 0 && this.state.address.trim().length > 0) {
            server.addPlace({ name: this.state.placeName, address: this.state.address, username: this.state.username }).then(x => console.log(x)).catch(e => console.log(e));
            this.setState({ placeName: '', address: '' })
            alert("The place was added successfully!")
        };
        event.preventDefault(); //tells the browser not to do default 
    };
    componentDidMount() {
        if (this.props.location) {
            if (this.props.location.state) {
                if (this.props.location.state.place) {
                    this.setState({ place: this.props.location.state.place })
                }
                if (this.props.location.state.username) {
                    console.log(this.props.location.state.username);
                    this.setState({ username: this.props.location.state.username })
                }
            }
        }
    };
    render() {
        if (this.props.location.state) {
            if (this.props.location.state.username.length === 0) {
                return (<Redirect to="/login"></Redirect>)
            }
            return (
                <div id="mainBody">
                    <div id="header">
                        <Link to={{ pathname: '/', state: { user: this.props.location.state.username } }} id="hometext">
                        <h1>Nearby Places</h1></Link>
                        <h2 id="subheading">Add a Place</h2>
                    </div>
                    <form onSubmit={this.onSubmit} id="newPlace">
                        <div id="addInfo">
                        <label id="input">Name:</label>
                        <input
                            type="text"
                            name="placeName"
                            value={this.state.placeName}
                            onChange={this.handleChange}
                        ></input>
                        <label id="input">Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={this.state.address}
                            onChange={this.handleChange}
                        ></input>
                        <button type="submit" id="button"> Add Place </button></div>
                        <br></br>
                        <div id="addInfo">
                        <label id="input">Review:</label>
                        <input
                            type="text"
                            name="reviewText"
                            value={this.state.reviewText}
                            onChange={this.handleChange}
                        ></input>
                        <label id="input">Rating:</label>
                        <input
                            type="text"
                            name="reviewRating"
                            value={this.state.reviewRating}
                            onChange={this.handleChange}
                        ></input>
                        <button type="submit" id="button"> Add Review </button></div>
                    </form></div>
            );
        } else {
            return (
                <div>
                    <h2>{this.state.place.name}</h2>
                    {this.state.place.reviews ? this.state.place.reviews.map(y => <div>
                        <h3>{y.rating}</h3>
                        <p>{y.text}</p>
                    </div>) : ''}
                    <p>{this.state.place.address}</p>
                </div>
            );
        };
    };
}
export default Place;