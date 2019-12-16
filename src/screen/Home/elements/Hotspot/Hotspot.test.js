import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Hotspot } from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('<Hotspot />', () => {

    it('mounts', () => {
        const props = { hotspot: {title: 'test', instruction: 'test'} }
        const wrapper = shallow(<Hotspot {...props} />)

        expect(wrapper.text()).toEqual('testtest')
    })

})
