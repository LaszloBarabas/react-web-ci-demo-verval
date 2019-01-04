

import React, { Component} from 'react'; 
import {connect} from 'react-redux'; 



class TemperatureInTheLocationContainer extends Component { 

	constructor(props) {
		super(props); 

        
	}

	render () { 
		if (! this.props.temperature) {
			return (
				<div> Select a location  please! </div>
			);
		}
		return (
			<div className="col-sm-4"> 
                Temperature in the location : 
				{ (this.props.temperature - 273.15).toFixed(2)+'  C'}
			</div>
		);
	}


}

function mapStateToProps(state){
	return {
		temperature: state.temperature
	};
}

export default connect(mapStateToProps)(TemperatureInTheLocationContainer); 
