import React, { useState } from 'react'
import { connect } from 'react-redux'
import './popOver.css'

import { create, reset } from '../../../../redux/actions'
import createHotspot from './utils/createHotspot'

export const PopOver = ({element, create, reset}) => {
    
    const [form, setForm] = useState({title: '', instruction: ''})
    const [err, setErr] = useState('')

    const modalPosition = {

        top: element.pageY + 170 > window.innerHeight ? 
            element.pageY - (element.pageY + 190 - window.innerHeight) : element.pageY,

        left: element.pageX + 340 > window.innerWidth ? 
            element.pageX - (element.pageX + 340 - window.innerWidth) : element.pageX

    }

    const settingForm = field => e => {
        setForm({...form, [field]: e.target.value})
    }

    const handleCreate = () => {
        if (form.title.length > 1 && form.instruction.length > 1) {

            const preHotspot = { ...element, title: form.title, instruction: form.instruction }
            const div = createHotspot(preHotspot)
            
            const hotspot = { ...element, element: div, title: form.title, instruction: form.instruction }
            create(hotspot)

        } else {
            setErr('Title and instruction fields must be filled')
        }
    }

    return (
        <div className='popOver'>

            <div style={modalPosition} className='popOver-modal'>

                <div>
                    <label>Title</label>
                    <input value={form.title} onChange={settingForm('title')} type='text' autoFocus />
                </div>

                <div>
                    <label>instruction</label>
                    <textarea value={form.instruction} onChange={settingForm('instruction')} />
                    { err && <small>{err}</small> }
                </div>

                <button className='testPopCreateButton' onClick={handleCreate}>Create</button>
                <button className='testPopCancelButton' onClick={reset}>Cancel</button>

            </div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        element: state.element
    }
}
const mapDispatchToProps = dispatch => {
    return {
        create: (hotspot) => dispatch(create(hotspot)),
        reset: () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopOver)