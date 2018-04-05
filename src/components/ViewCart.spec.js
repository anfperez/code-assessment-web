import React from 'react'
import { shallow } from 'enzyme'
import ViewCart from './ViewCart'

describe('ViewCart', () => {
	it('should exist', () => {
		expect(ViewCart).toBeDefined();
	});
	it('should display correctly', () => {
		const tree = shallow(
			<ViewCart name='viewcart test' />
			);
	expect(tree).toMatchSnapshot();
	});
});