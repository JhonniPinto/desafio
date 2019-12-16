import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Table } from './index'

Enzyme.configure({adapter: new Adapter()})

describe('<Table />', () => {

    it('mounts', () => {
        const props = {hotspots: [{id: 10, title: 'Test'}], remove: jest.fn()}
        const wrapper = shallow(<Table {...props} />)

        expect(wrapper.text()).toEqual('List of HotspotsTestdelete')
    })

    it('call remove', () => {
        const div = document.createElement('div')
        const props = {hotspots: [{id: 10, title: 'Test', element: div}], remove: jest.fn()}
        const wrapper = shallow(<Table {...props} />)

        expect(props.remove.mock.calls.length).toEqual(0)
        wrapper.find('.testTableDelButton').simulate('click')
        expect(props.remove.mock.calls.length).toEqual(1)
    })

})
