import React from 'react';
import ReactDOM from 'react-dom';
import { NflSearch } from './NflSearch';
import sinon from 'sinon';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NflSearch />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
    const fake = sinon.fake();
    sinon.replace(NflSearch.prototype, 'getNflStadiums', fake);
    const wrapper = shallow(<NflSearch />);
    wrapper.setState({ 
        stadiums: [{
            stadiumName: 'Ford Field',
            team: 'Detroit Lions',
            city: 'Detroit',
            state: 'Michigan'
        }]
    });
    sinon.restore();
    expect(wrapper).toMatchSnapshot();
});

it('calls getNflStadiums once', () => {
    const fake = sinon.fake();
    sinon.replace(NflSearch.prototype, 'getNflStadiums', fake);
    shallow(<NflSearch />);

    sinon.restore();
    expect(fake.callCount).toBe(1);
});