import React from 'react'
import { connect } from 'react-redux'
import { unmountComponentAtNode } from 'react-dom'
import './table.css'

import { remove } from '../../../../redux/actions'

export const Table = ({hotspots, remove}) => {

    const deleteElement = (hs) => () => {

        unmountComponentAtNode(hs.element)
        remove(hs.id)

    }

    return (
        <table className='table'>

            <thead>
                <tr>
                    <th>List of Hotspots</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                { hotspots.map(hs => {
                    return (
                        <tr key={hs.id}>
                            <td>{hs.title}</td>
                            <td><button className='testTableDelButton' onClick={deleteElement(hs)}>delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
            
        </table>
    )
}

const mapStateToProps = state => {
    return {
        hotspots: state.hotspots
    }
}

const mapDispatchToProps = dispatch => {
    return {
        remove: (id) => dispatch(remove(id)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)