import React, { Component } from 'react';
import CitiesContainer  from '../containers/cities.container';
import SelectedCityContainer from '../containers/selected.city.container'; 
import SearchContainer from '../containers/search.container'; 
import TemperatureInTheLocationContainer from '../containers/temperature-in-the-location.container'; 

export default class App extends Component {
	render() {
        var a; 
		return (
			<div>
        React simple starter
				<div> 
					<hr />
					<CitiesContainer />      
					<SelectedCityContainer /> 
					<hr/>
				</div> 
				<div> 
					<hr/>
					<SearchContainer />
					<hr />
					<TemperatureInTheLocationContainer />
					<hr/>
				</ div> 
			</div>
		);
	}
}




