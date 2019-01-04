

import React, { Component} from 'react'; 
import {connect} from 'react-redux'; 



class SelectedCityContainer extends Component { 

	constructor(props) {
		super(props); 

        
	}

	render () { 
		if (! this.props.city) {
			return (
				<div> Select a city please! </div>
			);
		}
		return (
			<div className="col-sm-4"> 
				{' City detail: ' + this.props.city.name}
			</div>
		);
	}


}

function mapStateToProps(state){
	return {
		city: state.selectedCity 
	};
}

export default connect(mapStateToProps)(SelectedCityContainer); 
