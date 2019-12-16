import { onClick } from './eventFunctions'

test('./screen/Home/utils/evenFunctions - onClick', () => {
    const hs = { clicking: true }
    const click = jest.fn()
    const e = {
        timeStamp: '', 
        pageX: '', 
        pageY: '', 
        target: document.createElement('div')
    }

    expect(click.mock.calls.length).toEqual(0)
    
    onClick(hs, click)(e)
    
    expect(click.mock.calls.length).toEqual(1)
})
