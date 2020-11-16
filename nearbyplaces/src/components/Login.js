import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends React.Component {
    constructor(props) { //'props' is always passed to constructor
        super(props); //have to have 'super' or else error
        this.state = {
            username: '',
            authenticated: false,
        };
    };

    onSubmit = (event) => {
        //check if user has provided input for user
        if(this.state.username.trim().length > 0) {
            this.setState({authenticated:true});
        };
        event.preventDefault(); //tells the browser not to do default 
    };

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    };

    render() {
        let from = {pathname: '/', state: {user: this.state.username}};
        if (this.state.authenticated) {
            return(
                <Redirect to={from} />
            );
        }

        return(
            <div>
                <div id="header"><h2>Nearby Places Login</h2></div>
                <div id='home'><Link to='/' id='hometext'>Nearby Places</Link></div>
                <form onSubmit={this.onSubmit} id="form">
                    <label>Username: </label>
                    <input 
                    type="text" 
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    ></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}
export default Login;