
// we will use jest and enzyme 
//


import React from 'react';
import {shallow, mount, configure} from 'enzyme'; 
import Adapter from 'enzyme-adapter-react-16'; 

import CitiesContainer  from '../cities.container'; 
import SelectedCityContainer from '../selected.city.container'; 
import SearchContainer from '../search.container'; 
import TemperatureInTheLocationContainer from '../temperature-in-the-location.container'; 

configure({adapter: new Adapter()}); 

describe('Smart Container component:   ', () => {
    it ('CitiesContainer should render correctly ', () => {
        var webcomponent = shallow( <CitiesContainer /> ); 
        expect(webcomponent).toMatchSnapshot(); 
    }); 
    it ('SelectedCityContainer should render correctly ', () => {
        var webcomponent = shallow( <SelectedCityContainer /> ); 
        expect(webcomponent).toMatchSnapshot(); 
    }); 
    it ('SearchContainer should render correctly ', () => {
        var webcomponent = shallow( <SearchContainer /> ); 
        expect(webcomponent).toMatchSnapshot(); 
    }); 
    it ('TemperatureInTheLocationContainer should render correctly ', () => {
        var webcomponent = shallow( <TemperatureInTheLocationContainer /> ); 
        expect(webcomponent).toMatchSnapshot(); 
    }); 

} ); 
