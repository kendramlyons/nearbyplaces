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
            cursor: 0,
            searchTerm: '',
            result: []
        };
    };
    componentDidMount(){
        let data = server.fetchPlaces();
        this.setState({places: data});
        window.addEventListener("keydown", this.handleKeyDown);
    };
    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    };
    // handleKeyDown = (e) => {
    //     const {cursor, entries} = this.state;
    //     if(e.keyCode === 39 && (cursor < entries.length - 1)) { //right arrow key
    //         this.setState({cursor: cursor + 1});
    //     } else if (e.keyCode === 37 && (cursor > 0)) {  //left arrow key
    //         this.setState({cursor: cursor - 1});
    //     };
    // }
    search = (event) => {
        let result = server.search(this.state.searchTerm);
        this.setState({result: result})
        event.preventDefault();
    };
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    };
    body = (username) => {
        console.log(username)
        return (
            <div> 
                <div ><Link id="addNew" to = {{pathname: '/place', state:{username: username}}}>
                    Add New Place</Link></div>
                <form id="searchPlaces" onSubmit={this.search}>
                    <label> Find Nearby Places: </label>
                    <input type="text" value={this.state.searchTerm} 
                        onChange={this.handleChange} name="searchTerm"></input>
                    <button type="submit">Search</button>
                </form>
                <div id = "searchResults">
                    {this.state.result.map(r => 
                    <Link to = {{pathname: '/place', state:{place:r} }} id="searchResults">
                    <h1>{r.name}</h1>
                    <h3>{r.address}</h3>
                    {r.reviews.map(y => <div>
                        <h2>{y.rating}</h2>
                        <p>{y.text}</p></div>)}</Link>)}
                </div>
                <div id="myPlaces"> 
                    {this.state.places.map(p => 
                    <Link to = {{pathname: '/place', state:{place:p} }} id="myPlaces">
                    <div>
                    <h2>{p.name}</h2>
                    <p>{p.address}</p>
                    </div>
                    </Link>)}
                </div>
            </div>
        );
    };
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
            {this.body(username)}
            <br></br>
            </div>
        );
    };
}
export default Home;