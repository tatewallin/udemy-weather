import axios from 'axios';

const API_KEY = '9613479e8e85d105e1427b94e58ee28e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator...
export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;

    // axios is a 3rd party lib used for ajax calls
    // returns a promise
    const request = axios.get(url);

    console.log('Action Creator - Request:', request);

    // if the paylod is a promise, redux promise(middleware) stops the action entirely
    // once the request finishes it dispatches a new action of the same type but with a payload of the resolved request(unwraps the promise)
    return {
        type:FETCH_WEATHER,
        payload:request
    };
}