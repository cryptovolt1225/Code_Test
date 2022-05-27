const getVerticalsString = ({ vertical = null, subVertical = null, triVertical = null }) => {
    const verticalString = `Vertical:${vertical}`
    let subVerticalsString = ''

    if (subVertical) {
        subVerticalsString = `:::SubVerticals:${subVertical}`
    }

    let triVerticalsString = ''

    if (triVertical) {
        triVerticalsString = `:::TriVerticals:${triVertical}`
    }

    return verticalString + subVerticalsString + triVerticalsString
}

module.exports = getVerticalsString
