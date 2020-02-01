import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

let wrapped = shallow(<Card />);
describe('Card element displays', () => {
  it('should have a button', () => {
    expect(wrapped.find('button'));
  });
});
