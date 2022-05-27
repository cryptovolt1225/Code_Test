const getSearchParamValue = ({ searchParam }) => {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(searchParam)
}

module.exports = getSearchParamValue
