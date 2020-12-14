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
    componentDidMount() {
        server.fetchPlaces().then(x => {this.setState({places: x}); console.log(x)}).catch(e => console.log(e));
        window.addEventListener("keydown", this.handleKeyDown);
    };
    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    };
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
                <div id="searchPlaces">
                <form onSubmit={this.search}>
                    <label> Find Nearby Places: </label>
                    <input type="text" value={this.state.searchTerm} 
                        onChange={this.handleChange} name="searchTerm"></input>
                    <button type="submit">Search</button>
                </form>
                <div id = "searchResults">
                    {this.state.result.map(r => 
                    <div><img src={require('../images/'+r.image)} alt={r.name} id="image"></img><Link to = {{pathname: '/place', state:{place:r} }} id="aPlace">
                    <h1>{r.name}</h1>
                    <h3>{r.address}</h3>
                    
                    {r.reviews.map(y => <div id="aRating">
                        <h2 id="stars">{y.rating}</h2>
                        <p id="review">{y.text}</p></div>)}</Link></div>)}
                </div></div>
                <div id="new"><Link id="addNew" to = {{pathname: '/place', state:{username: username}}}>
                    Add New Place</Link></div>
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
            </div>
        );
    };
}
export default Home;