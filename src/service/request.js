import axios from 'axios';

export const WEATHER_DATA  = axios.create({
	baseURL: 'http://api.apixu.com/v1/current.json?key=4dad4ec7d5f74588bb7173557182006&q=Kiev',
	headers: {}
})