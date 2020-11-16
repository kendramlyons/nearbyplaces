import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
// import server from '../ServerInterface/server';
class Home extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = {
            username: '',
        };
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
            </div>)
    }
};
export default Home;