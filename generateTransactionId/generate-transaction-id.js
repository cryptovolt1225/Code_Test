const generateRandomNumber = require("./generate-random-number")
const generateTimestamp = require("./generate-time-stamp")

const generateTransactionId = ({ transactionIdSiteNumber = null }) => {
    if (transactionIdSiteNumber === null) {
        throw new Error('Missing transaction ID site number')
    }

    return '' + transactionIdSiteNumber + generateTimestamp() + generateRandomNumber()
}

module.exports = generateTransactionId
