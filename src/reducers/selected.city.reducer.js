
/**
 *  
 * state is not application state only 
 * state THIS reducer is responsabile  for 
 * @param {*} state 
 * @param {*} action 
 */
export  default function (state = null, action) {
	switch (action.type) {
	case 'SELECTED_CITY':
		return action.payload; 
	}

	return state; 
}