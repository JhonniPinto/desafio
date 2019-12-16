import React from 'react'
import { render } from 'react-dom'

import Hotspot from '../../Hotspot/index'

export default (hotspot) => {

    const fatherElement = hotspot.element
    const className = fatherElement.className
    fatherElement.className = className + ' relative'

    const div = document.createElement('div')
    render(<Hotspot hotspot={hotspot} />, div)

    fatherElement.appendChild(div)
    
    return div

}   