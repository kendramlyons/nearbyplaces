import places from './data';
let api = "https://kendramlyons-nearbyplaces-api.herokuapp.com/";
let server = {
    fetchPlaces: () => {return(fetch(api + "/places").then(x => x.json()))},
    search: (searchTerm, location) => {
        let result = places.filter(
            x => x.name.toLowerCase().includes(searchTerm.toLowerCase()));
        return(result);
    },
    addPlace: (place) => {places.push(place)}
};
export default server;