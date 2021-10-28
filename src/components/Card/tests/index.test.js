import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';


import Card, { Wrapper } from '../index';

configure({ adapter: new Adapter() });
describe('<Card />', () => {
    it('should render <Wrapper /> components', () => {
        const renderedComponent = shallow(<Card data={{ Poster: 'test' }} onClick={jest.fn()} />);
        expect(renderedComponent.find(Wrapper).length).toEqual(1);
    });
});
