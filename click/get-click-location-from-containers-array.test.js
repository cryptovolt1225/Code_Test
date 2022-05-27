const getClickLocationFromContainersArray = require("./get-click-location-from-containers-array")

const config = {
    linkContainersArray: [
        {
            linkContainerName: 'Element Selector',
            linkContainerSelectors: ['div']
        },
        {
            linkContainerName: 'ID Selector',
            linkContainerSelectors: ['#idSelectorTest']
        },
        {
            linkContainerName: 'Class Selector',
            linkContainerSelectors: ['.classSelectorTest']
        },
        {
            linkContainerName: 'Multi Class Selector',
            linkContainerSelectors: ['.class-1.class-2']
        }
    ]
}
test('default click location is "content"', () => {
    const link = document.createElement('a')
    const clickLocation = getClickLocationFromContainersArray(link, config.linkContainersArray)

    expect(clickLocation).toBe('Content')
})

test('location is "content" when linkContainersArray is empty', () => {
    const link = document.createElement('a')
    const clickLocation = getClickLocationFromContainersArray(link, [])

    expect(clickLocation).toBe('Content')
})

test('click location based on element', () => {
    document.body.innerHTML =
        '<div>' +
        '  <a id="link" href="#">Test Link</a>' +
        '</div>'

    const link = document.getElementById('link')
    const clickLocation = getClickLocationFromContainersArray(link, config.linkContainersArray)

    expect(clickLocation).toBe('Element Selector')
})

test('click location based on ID', () => {
    document.body.innerHTML =
        '<div id="idSelectorTest">' +
        '  <a id="link" href="#">Test Link</a>' +
        '</div>'

    const link = document.getElementById('link')
    const clickLocation = getClickLocationFromContainersArray(link, config.linkContainersArray)

    expect(clickLocation).toBe('ID Selector')
})

test('click location based on class', () => {
    document.body.innerHTML =
        '<div class="classSelectorTest">' +
        '  <a id="link" href="#">Test Link</a>' +
        '</div>'

    const link = document.getElementById('link')
    const clickLocation = getClickLocationFromContainersArray(link, config.linkContainersArray)

    expect(clickLocation).toBe('Class Selector')
})

test('click location based on multiple classes - match', () => {
    document.body.innerHTML =
        '<div class="class-1 class-2">' +
        '  <a id="link" href="#">Test Link</a>' +
        '</div>'

    const link = document.getElementById('link')
    const clickLocation = getClickLocationFromContainersArray(link, config.linkContainersArray)

    expect(clickLocation).toBe('Multi Class Selector')
})

test('click location based on multiple classes - miss', () => {
    document.body.innerHTML =
        '<p class="class-1 class-3">' +
        '  <a id="link" href="#">Test Link</a>' +
        '</p>'

    const link = document.getElementById('link')
    const clickLocation = getClickLocationFromContainersArray(link, config.linkContainersArray)

    expect(clickLocation).toBe('Content')
})
