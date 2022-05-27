const generateRandomNumber = () => {
    return Math.floor(1000000000000 + Math.random() * 900000000000)
}

module.exports = generateRandomNumber;