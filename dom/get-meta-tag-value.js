const getMetaTagValue = (tagName) => {
    const metaTag = document.querySelector(`meta[name=${tagName}]`)

    return metaTag ? metaTag.content : false
}

module.exports = getMetaTagValue
