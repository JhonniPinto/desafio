import React from 'react'
import './hotspot.css'

export const Hotspot = ({hotspot}) => {

    const position = {left: hotspot.eX, top: hotspot.eY}

    const instructionPosition = {

        left: hotspot.pageX + 100 > window.innerWidth ? -(hotspot.pageX + 220 - window.innerWidth) 
                : hotspot.pageX - 100 < 0 ? -(hotspot.pageX - 100) -80  : -100,

        bottom: hotspot.pageY + 100 > window.innerHeight ? 30 : ''
        
    }

    return (
        <div style={position} className='noToPick hotspot'>

            <div className='noToPick hotspot-icon'></div>

            <div style={instructionPosition} className='noToPick hotspot-instruction'>
                <h3>{hotspot.title}</h3>
                <p>{hotspot.instruction}</p>
            </div>
            
        </div>
    )
}

export default Hotspot