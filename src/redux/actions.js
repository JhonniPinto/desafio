export const inspect = () => {
    return {
        type: 'INSPECT'
    }
}

export const clicking = () => {
    return {
        type: 'CLICKING'
    }
}

export const click = (element) => {
    return {
        type: 'CLICK',
        element
    }
}

export const create = (hotspot) => {
    return {
        type: 'CREATE',
        hotspot
    }
}

export const reset = (hotspot) => {
    return {
        type: 'RESET'
    }
}

export const remove = (id) => {
    return {
        type: 'REMOVE',
        id
    }
}

