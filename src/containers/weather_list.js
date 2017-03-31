import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
    renderWeather(cityData){
        const name = cityData.city.name;

        // creates an array of all of the temps
        const temps = cityData.list.map(weather => weather.main.temp);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const {lon,lat} = cityData.city.coord;
        return(
            <tr key={name}>
                <td>
                    <GoogleMap lat={lat} lon={lon}/>
                </td>
                <td>
                    <Chart data={temps} color="orange" units="K"/>
                </td>
                <td>
                    <Chart data={pressures} color="green" units="hPA"/>
                </td>
                <td>
                    <Chart data={humidities} color="blue" units="%"/>
                </td>
            </tr>
        )
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

}

function mapStateToProps(state) {
    return {weather:state.weather};
}
/* Option ES6 ways to code the function
function mapStateToProps({weather}) { // {weather} ===  {state.weather} since state has a property called weather
    return {weather:weather};
}

function mapStateToProps({weather}) {
    return {weather}; // {weather} === {weather:weather}
}
*/

export default connect (mapStateToProps)(WeatherList);