import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Home } from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('</Home />', () => {

  it('mounts', () => {
    const props = { hs: {}, inspect: () => '', clicking: () => '' }
    const wrapper = shallow(<Home {...props} />)

    expect(wrapper.length).toEqual(1) // only a node
    expect(wrapper.find('.create-button').text()).toEqual('Create Hotspot')
  })

  it('calls create', () => {
    const props = { hs: {}, inspect: jest.fn(), clicking: jest.fn() }
    const wrapper = shallow(<Home {...props} />)

    expect(props.inspect.mock.calls.length).toEqual(0)
    wrapper.find('.create-button').simulate('click')
    expect(props.inspect.mock.calls.length).toEqual(1)
  })

})