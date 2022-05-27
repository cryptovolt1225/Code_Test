const getVerticalsString = require("./get-verticals-string")

let config = {}

beforeEach(() => {
    config = {
        vertical: 'mainVert',
        subVertical: 'subVertical',
        triVertical: 'triVertical'
    }
})

test('generates verticals string', () => {
    const verticalsString = getVerticalsString(config)

    expect(verticalsString).toBe('Vertical:mainVert:::SubVerticals:subVertical:::TriVerticals:triVertical')
})

test('generates verticals string while ignoring empty values', () => {
    config.subVertical = ''
    config.triVertical = ''
    const verticalsString = getVerticalsString(config)

    expect(verticalsString).toBe('Vertical:mainVert')
})

test('generates verticals string when subVerticals is array', () => {
    config.subVertical = ['values', 'in', 'array']
    config.triVertical = undefined
    const verticalsString = getVerticalsString(config)

    expect(verticalsString).toBe('Vertical:mainVert:::SubVerticals:values,in,array')
})

test('generates verticals string when triVerticals is array', () => {
    config.subVertical = undefined
    config.triVertical = ['values', 'in', 'array']
    const verticalsString = getVerticalsString(config)

    expect(verticalsString).toBe('Vertical:mainVert:::TriVerticals:values,in,array')
})

test('generates verticals string when sub and tri verticals is false', () => {
    config.subVertical = false
    config.triVertical = false
    const verticalsString = getVerticalsString(config)

    expect(verticalsString).toBe('Vertical:mainVert')
})

test('generates vertical string when sub and tri verticals are undefined', () => {
    config.subVertical = undefined
    config.triVertical = undefined
    const verticalsString = getVerticalsString(config)

    expect(verticalsString).toBe('Vertical:mainVert')
})

test('returns default if nothing is given', () => {
    config.vertical = undefined
    config.subVertical = undefined
    config.triVertical = undefined

    const verticalsString = getVerticalsString(config)

    expect(verticalsString).toBe('Vertical:null')
})
