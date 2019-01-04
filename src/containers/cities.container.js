

import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 	
import {bindActionCreators} from 'redux'; 

import {selectCity} from '../actions/index'; 
/**
 * Component as smart Container to exemplify 
 * the interaction with the app state 
 */
class CitiesContainer  extends Component {

	constructor(props) {
		super(props);
	}

	/**
     * lifecycle method 
     */
	render() {
		return (
			<ul className="list-group  col-sm-4">
				{this.renderCitiesList()}
			</ul>
		);
	}


	/**
     * create lis element by mapping the props cities 
     * add the onClick event the eventhandler
     * which happens to be an action creator 
     * because is dispatch to the props.selectedCity
     */
	renderCitiesList() {
		//we have the cities updated from the app state 
		// now is time the map over all the elements and 
		return this.props.cities.map(
			(item) => {
				return (
					<li 
						key={item.name}
						onClick={ () => this.props.selectedCity(item)} 
						className="list-group-item"  >
						{item.name}
					</li>
				);
			}

		);
	}

}


// Everything returned from this function will end up as props 
// on the Cities.Container
function mapDispatchToProps(dispatch) {
	// whenever selectCity is called, the result is passed
	// to all app rreducers 
	return bindActionCreators ({ selectedCity: selectCity}, dispatch); 
	//selectedCity is a key  and is accessible as props
	// the dispatch method is accesible as selectedCity props
	// selectCity is the imported function as action creator 
}


/**
 * 
 * first cities belongs to props
 * second cities belongs to the application state and is created by reducer
 * @param {*} state 
 */
function mapStateToProps(state) {
	return {
		cities: state.cities 
	};
}





/**
 * Map the app state (my interesting part) to smart component props
 * 
 */
export default connect(mapStateToProps, mapDispatchToProps)(CitiesContainer); 
//export default connect(mapStateToProps )(CitiesContainer); 
