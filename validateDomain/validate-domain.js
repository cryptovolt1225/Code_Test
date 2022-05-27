const md5 = require("md5")
const getLocationPropertyValue = require("../dom/get-location-property-value")

const validateDomain = ({ domainHash = null } = {}) => {
    const currentDomainHash = md5(getLocationPropertyValue('host'))

    // no hash === no validation, we assume domain is correct
    if (domainHash === null) {
        return true
    }

    return (domainHash === currentDomainHash)
}

module.exports = validateDomain
