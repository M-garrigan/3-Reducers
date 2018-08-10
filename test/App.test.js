
import React from 'react';
import App from '../src/components/App.jsx';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';

describe('<App />', () => {
  it('Shows a component with class of main_wrapper', () => {
    const wrapper = shallow(<App />);
    const defaultState = wrapper.state().dataSet;
    expect(wrapper.find('.main_wrapper')).to.have.length(1);
  });
});