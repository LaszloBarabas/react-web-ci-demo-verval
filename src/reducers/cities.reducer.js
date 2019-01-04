

// reducer is a function wich create and returns a piece of state 
// in this demo application the reducer returns a 
// statis list of information 

// function (state = null)
// ...
// return state 
// receive my part of the global app state 
export default function () {
	// static list of cities 
	return [
		{name: 'Kolozsvar'}, 
		{name: 'Udvarhely'}, 
		{name: 'Vasarhely'}, 
		{name: 'Varad'}, 
		{name: 'Szatmar'} 
	];



}