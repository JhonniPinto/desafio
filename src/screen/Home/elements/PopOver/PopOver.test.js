import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { PopOver } from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('<PopOver />', () => {

    it('mounts', () => {
        const props = {element: {}, create: () =>'', reset: () => ''}
        const wrapper = shallow(<PopOver {...props} />)

        expect(wrapper.text()).toEqual('TitleinstructionCreateCancel')
    })
    
    it('call create', () => {
        const props = {element: {}, create: ()=> '', reset: () => ''}
        const wrapper = shallow(<PopOver {...props} />)
        
        wrapper.find('.testPopCreateButton').simulate('click')
        expect(wrapper.text()).toEqual('TitleinstructionTitle and instruction fields must be filledCreateCancel')
    })

    it('call reset', () => {
        const props = {element: {}, create: ()=> '', reset: jest.fn()}
        const wrapper = shallow(<PopOver {...props} />)

        expect(props.reset.mock.calls.length).toEqual(0)
        wrapper.find('.testPopCancelButton').simulate('click')
        expect(props.reset.mock.calls.length).toEqual(1)
    })

})