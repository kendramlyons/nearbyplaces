import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import server from '../ServerInterface/server';
// import Place from './Place';

class Home extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = {
            username: '',
            places: [],
            cursor: 0
        };
    }
    componentDidMount(){
        let data = server.fetchPlaces();
        this.setState({places: data});
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        if(e.keyCode === 39) { //right arrow key

        }
    }

    body = () => {
        return (
            <div>
                <div>
                <form id="searchPlaces">
                    <label> Find Nearby Places: </label>
                    <input type="text"></input>
                    <button type="submit">Search</button>
                </form>
                </div>
                <div id="myPlaces">
                    {this.state.places.map(p => 
                    <Link to = {{pathname: '/place', state:{place:p} }} id="myPlaces">
                    <div>
                    <h2>{p.name}</h2>
                    <h3>{p.reviews.rating}</h3> 
                    <p>{p.reviews.text}</p>
                    <p>{p.address}</p>
                    </div>
                    </Link>)}
                </div>
            </div>
        );
    }
    render() {
        var username = '';
        const location = this.props.location;
        if (location) {
            if (location.state) {
                if (location.state.user) {
                    username = location.state.user;
                };
            };
        };
        return(
            <div id="mainBody">
            <div id="header"><h1>Welcome to Nearby Places!</h1></div>
                <div id="loginLink">
                    {username.length > 0 ? username 
                    : <Link to='/login' id='loginText'> Login </Link>}
                </div>
            {this.body()}
            </div>
        );
    }
};
export default Home;