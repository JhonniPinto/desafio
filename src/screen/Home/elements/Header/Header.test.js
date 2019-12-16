import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Header from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('<Header />', () => {
    
    it('mounts', () => {
        const wrapper = shallow(<Header />)
        
        expect(wrapper.text()).toEqual('ConpassHomeAboutContact')
    })

})