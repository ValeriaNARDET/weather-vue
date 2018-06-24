import axios from 'axios';

export const WEATHER_DATA  = axios.create({
	baseURL: 'http://api.apixu.com/v1/current.json?key=4dad4ec7d5f74588bb7173557182006&q=Kiev',
	headers: {}
})

export const GET_LOCATION_DATA = () => {
  axios.create({
    baseURL: 'https://services.gisgraphy.com/geoloc/?lat=49.9874079&lng=36.2308899&radius=10000&distance=true&format=JSON&from=1&to=10&indent=true',
    headers: {}
  })
}


export const GET_WEATHER_BY_LOCATION = () =>{
  let geolocation = {},
      locationData = {};
  navigator.geolocation.getCurrentPosition(function(position) {
    for( let field in position.coords ){
      if( field === 'latitude' || field === 'longitude' ){
        geolocation[field] = position.coords[field]
      }
    }

  });



}
