import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import karenSetData from './../data';

let wrapper = shallow(<Card data={karenSetData} />);
describe('Card element displays', () => {
  it('should have a button', () => {
    expect(wrapper.find('button'));
  });
});
