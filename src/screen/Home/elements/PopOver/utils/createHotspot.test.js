import createHotspot from './createHotspot'

test('./screen/Home/elements/PopOver/utils/createHotspot', () => {
    const hotspot = {
        id: 10,
        pageX: 100,
        pageY: 100,
        eX: 50,
        eY: 50,
        element: document.createElement('div'),
        title: 'test',
        instruction: 'test'
    }
    const result = createHotspot(hotspot)
    expect(result.textContent).toEqual('testtest')
    expect(result.innerHTML).toEqual('<div style=\"left: 50px; top: 50px;\" class=\"noToPick hotspot\"><div class=\"noToPick hotspot-icon\"></div><div style=\"left: -100px;\" class=\"noToPick hotspot-instruction\"><h3>test</h3><p>test</p></div></div>')
})