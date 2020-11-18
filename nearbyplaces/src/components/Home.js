import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import server from '../ServerInterface/server';
// import Place from './components/Place';

class Home extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = {
            username: '',
            places: []
        };
    }
    componentDidMount(){
        let data = server.fetchPlaces();
        this.setState({places: data});
    }
    render() {
        let username = '';
        const location = this.props.location;
        if (location) {
            if (location.state) {
                if (location.state.user) {
                    username = location.state.user;
                }
            }
        };
        return(            
            <div id="mainBody">
                <div id="header"><h1>Welcome to Nearby Places!</h1></div>
                <div id="loginLink">
                    {username.length > 0 ? username 
                    : <Link to='/login' id='loginText'> Login </Link>}
                </div>
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
                    <h4>{p.reviews.text}</h4>
                    <h5>{p.address}</h5>
                    </div>
                    </Link>)}
                </div>
            </div>)
    }
};
export default Home;