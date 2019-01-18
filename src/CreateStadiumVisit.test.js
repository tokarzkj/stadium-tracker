import React from 'react';
import ReactDOM from 'react-dom';
import CreateStadiumVisit from './CreateStadiumVisit';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CreateStadiumVisit />, div);
    ReactDOM.unmountComponentAtNode(div);
});

