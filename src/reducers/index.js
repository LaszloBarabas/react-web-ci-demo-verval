import { combineReducers } from 'redux';
import Cities from './cities.reducer'; 
import SelectedCity from './selected.city.reducer'; 
import Temperature from './weather.reducer'; 

// it is a simple object 
// which combine the reducers 
const rootReducer = combineReducers({
	//state: (state = {}) => state
	cities:  Cities, 
	selectedCity: SelectedCity,
	temperature:   Temperature
});


export default rootReducer;
