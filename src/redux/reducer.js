const INITIAL_STATE = {
    hotspots: [],
    element: {},
    inspect: false,
    clicking: false,
    click: false,
    create: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INSPECT':
            return {...state, inspect: true, clicking: false, click: false, create: false}

        case 'CLICKING':
            return {...state, clicking: true}

        case 'CLICK':
            return {...state, element: action.element, inspect: false, clicking: false, click: true}

        case 'CREATE':
            const hotspots = [...state.hotspots, action.hotspot] 
            return {...state, hotspots, element: {}, click: false, create: true}

        case 'RESET':
            return {...INITIAL_STATE, hotspots: state.hotspots}

        case 'REMOVE': 
            const filtered = state.hotspots.filter(hot => hot.id !== action.id)
            return {...state, hotspots: filtered}

        default:
            return state
    }
}