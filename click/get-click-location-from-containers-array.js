const getClickLocationFromContainersArray = (link, linkContainersArray) => {
    const clickContainersSelectorsArray = linkContainersArray
        .map((clickContainer) => clickContainer.linkContainerSelectors)
        .flat()

    const containerEl = clickContainersSelectorsArray.length > 0
        ? link.closest(clickContainersSelectorsArray)
        : null

    let clickLocation = 'Content'

    if (containerEl !== null) {
        linkContainersArray.forEach((linkContainer) => {
            linkContainer.linkContainerSelectors.forEach(selector => {
                if (containerEl.matches(selector)) {
                    clickLocation = linkContainer.linkContainerName
                }
            })
        })
    }

    return clickLocation
}

module.exports = getClickLocationFromContainersArray
