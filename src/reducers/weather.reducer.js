
export default function(state = null, action) {
	switch (action.type) {
	case 'FETCH_WEATHER':
		// just for debugging in the console 
		//console.log(' Temperature Reducer is on duty'); 
		//console.log(action); 
		return action.payload.data.main.temp ;
	}
	return state;
}
