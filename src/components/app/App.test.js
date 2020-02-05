import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Card from './Card';

let wrapped = shallow(<App />);

describe('App has header App-header', () => {
  it('should render App-header', () => {
    expect(wrapped.find('.App-header'));
  });

  it('should have Card component', () => {
    expect(wrapped.find(<Card />));
  });
});
