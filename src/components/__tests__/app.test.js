
//import React from 'react';
//import App  from '../app';
////import renderer from 'react-test-renderer';
//import ShallowRenderer from 'react-test-renderer/shallow';
//
//it('App renders correctly', () => {
//    const renderer = new ShallowRenderer(); 
//
//    const appcomponent = renderer.create(<App />).toJSON(); 
//    expect(appcomponent).toMatchSnapshot(); 
//}); 






// we will use jest and enzyme 
//


import React from 'react';
import {shallow, mount, configure} from 'enzyme'; 
import Adapter from 'enzyme-adapter-react-16'; 

import App  from '../app'; 

configure({adapter: new Adapter()}); 

describe('App component  ', () => {
    it ('should render correctly ', () => {
        var webcomponent = shallow( <App /> ); 
        expect(webcomponent).toMatchSnapshot(); 

    }); 

} ); 
