const removeOriginFromUrl = (linkUrl, locationOrigin) => {
    return linkUrl.replace(locationOrigin, '')
}

module.exports = removeOriginFromUrl
