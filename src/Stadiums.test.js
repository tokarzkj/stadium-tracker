import React from 'react';
import ReactDOM from 'react-dom';
import Stadiums from './Stadiums';
import { shallow } from 'enzyme';
import sinon from 'sinon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stadiums />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
    const fake = sinon.fake();
    sinon.replace(Stadiums.prototype, 'getStadiums', fake);
    const wrapper = shallow(<Stadiums />);
    wrapper.setState({ 
        stadiums: [{
            id: '1', 
            stadiumName: 'Ford Field', 
            visitDate: '2019-01-18 00:00:00'
        }]
    });
    
    expect(wrapper).toMatchSnapshot();
});