import reducer from './reducer'

const INITIAL_STATE = {
    hotspots: [],
    element: {},
    inspect: false,
    clicking: false,
    click: false,
    create: false
}

test('./redux/reducer - action.type = INSPECT', () => {
    const action = {
        type: 'INSPECT'
    }
    const result = reducer(INITIAL_STATE, action)
    expect(result).toEqual({...INITIAL_STATE, inspect: true})
})

test('./redux/reducer - action.type = CLICKING', () => {
    const action = {
        type: 'CLICKING'
    }
    const result = reducer(INITIAL_STATE, action)
    expect(result).toEqual({...INITIAL_STATE, clicking: true})
})

test('./redux/reducer - action.type = CLICK', () => {
    const element = {id: '', element: '', pageX: '', pageY: '', eX: '', eY: ''}
    const action = {
        type: 'CLICK',
        element
    }
    const result = reducer(INITIAL_STATE, action)
    expect(result).toEqual({...INITIAL_STATE, click: true, element})
})

test('./redux/reducer - action.type = CREATE', () => {
    const hotspot = {id: '', element: '', pageX: '', pageY: '', eX: '', eY: '', title: '', instruction: ''}
    const action = {
        type: 'CREATE',
        hotspot
    }
    const result = reducer(INITIAL_STATE, action)
    expect(result).toEqual({...INITIAL_STATE, create: true, hotspots: [hotspot]})
})

test('./redux/reducer - action.type = RESET', () => {
    const action = {
        type: 'RESET'
    }
    const result = reducer(INITIAL_STATE, action)
    expect(result).toEqual(INITIAL_STATE)
})

test('./redux/reducer - action.type = REMOVE', () => {
    INITIAL_STATE.hotspots.push({id: 10})
    const id = 10
    const action = {
        type: 'REMOVE',
        id
    }
    const result = reducer(INITIAL_STATE, action)
    expect(result).toEqual({...INITIAL_STATE, hotspots: []})
})
