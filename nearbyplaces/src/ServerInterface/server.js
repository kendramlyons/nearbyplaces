import places from './data';
let server = {
    fetchPlaces: () => {return places},
    search: (searchTerm, location) => {
        let result = places.filter(
            x => x.name.toLowerCase().includes(searchTerm.toLowerCase()));
        return(result);
    },
    addPlace: (place) => {places.push(place)}
};
export default server;