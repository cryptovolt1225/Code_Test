export const isAffLink = (link, { outboundLinkFolder }) => {
    return link.href.includes(outboundLinkFolder)
}

module.exports = isAffLink
