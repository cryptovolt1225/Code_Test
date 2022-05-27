const getLocationPropertyValue = require("./get-location-property-value")

const urlIncludes = (string) => {
    const url = getLocationPropertyValue('href')

    if (url !== undefined) {
        return string ? url.includes(string) : false
    }

    return false
}

module.exports = urlIncludes
