import React from 'react';
import Enzyme from 'enzyme';
import PropertyCard from '../../src/components/property-card';

describe('<PropertyCard>', () => {
  it('renders in the type of property', () => {
    const wrapper = Enzyme.shallow(AddProperty);
    const type = 'Flat';
    expect(wrapper.find({ prop: 'type' })).toBe('Flat');
  });
});
