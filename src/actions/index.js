

import axios from 'axios';

const API_KEY = '6a78596d062df78380eff5944c4e5567';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
/**
 * 
 * @param {  city object  name: value } city 
 */
export function selectCity(city) {
	// selectCity is an action creator which 
	// return an object with type and payload
	//console.log(city.name)
	return {
		type: 'SELECTED_CITY', 
		payload: city
	};
}
/**
 * 
 * @param {*} locationName 
 */
export function fetchWeather(locationName) {


	const url = `${ROOT_URL}&q=${locationName}`;
	const request = axios.get(url);

	return {
		type: 'FETCH_WEATHER',
		payload: request
	};
}