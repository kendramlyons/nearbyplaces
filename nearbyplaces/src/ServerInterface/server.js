// import places from './data';
let api = "http://localhost:3003";
let server = {
    fetchPlaces: () => {return(fetch(api + "/places").then(x => x.json()))},
    search: (searchTerm, location) => {return(fetch(api + `/search/${searchTerm}/${location}`).then(x => x.json()))},
    addPlace: (place) => {console.log(place); return(fetch(api + "/place", {method: 'POST', body: JSON.stringify({name: place.name, address: place.address, username: place.username})}).then(x => x.json()))},
    addReview: (review, placeid) => {return(fetch(api + `/review/${placeid}`, {method: 'POST', body: JSON.stringify(review)}))}
};
export default server;