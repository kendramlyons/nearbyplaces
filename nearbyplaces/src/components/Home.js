import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import server from '../ServerInterface/server';

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
                    : <Link to='/login' id='logintext'>Login</Link>}
                </div>
                <div id="findPlaces">
                    {this.state.places.map(p => 
                    <Link to = {{pathname: '/place', state:{place:p} }} id="myPlaces">
                    <p>
                    <h2>{p.name}</h2>
                    <h3>{p.stars}</h3>
                    <h4>{p.reviews}</h4>
                    <h5>{p.address}</h5>
                    </p>
                    </Link>)}
                </div>
            </div>)
    }
};
export default Home;