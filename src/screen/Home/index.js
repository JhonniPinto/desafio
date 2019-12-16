import React from 'react'
import { connect } from 'react-redux'
import './home.css'

import Header from './elements/Header'
import Table from './elements/Table'
import PopOver from './elements/PopOver'

import { inspect, clicking, click } from '../../redux/actions'
import { onClick, onMouseOver, onMouseOut } from './utils/eventFunctions'

export function Home({ hs, inspect, clicking, click }) {

  const handleCreateButton = () => {

    if (!hs.inspect) {
      inspect()
      setTimeout(() => clicking() , 500)
    }

  }
  
  return (
    <div className='noToPick' onClick={onClick(hs, click)} onMouseOver={onMouseOver(hs)} onMouseOut={onMouseOut(hs)}>

      <Header />
      
      { hs.click && <PopOver /> }
      
      <div className='noToPick main'>
        <button onClick={handleCreateButton} className='create-button'>Create Hotspot</button>
        <Table hotspots={hs.hotspots} />
      </div>

    </div>
  )
}


const mapStateToProps = state => {
  return {
    hs: state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    inspect: () => dispatch(inspect()),
    clicking: () => dispatch(clicking()),
    click: (element) => dispatch(click(element))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
