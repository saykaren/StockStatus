import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
let wrapped = shallow(<App />);

describe('App has header App-header', () => {
  it('should render App-header', () => {
    expect(wrapped.find('.App-header'));
  });
});
