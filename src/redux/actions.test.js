import { 
    inspect,
    clicking,
    click,
    create,
    reset,
    remove
 } from './actions'

test('./redux/actions - inspect', () => {
    const result = inspect()
    expect(result).toEqual({
        type: 'INSPECT'
    })
})

test('./redux/actions - clicking', () => {
    const result = clicking()
    expect(result).toEqual({
        type: 'CLICKING'
    })
})

test('./redux/actions - click', () => {
    const element = {id: '', element: '', pageX: '', pageY: '', eX: '', eY: ''}
    const result = click(element)
    expect(result).toEqual({
        type: 'CLICK',
        element
    })
})

test('./redux/actions - create', () => {
    const hotspot = {id: '', element: '', pageX: '', pageY: '', eX: '', eY: '', title: '', instruction: ''}
    const result = create(hotspot)
    expect(result).toEqual({
        type: 'CREATE',
        hotspot
    })
})

test('./redux/actions - reset', () => {
    const result = reset()
    expect(result).toEqual({
        type: 'RESET'
    })
})

test('./redux/actions - remove', () => {
    const id = 10
    const result = remove(id)
    expect(result).toEqual({
        type: 'REMOVE',
        id
    })
})
