const getCategoriesString = ({ category = null, subCategories = [] }) => {
    const categoryString = `Category:${category}`
    let subCategoriesString = ''

    if (!Array.isArray(subCategories)) {
        return categoryString
    }

    subCategories = subCategories.filter(item => item)

    if (subCategories.length > 0) {
        subCategoriesString = `:::SubCategories:${subCategories.join()}`
    }

    return categoryString + subCategoriesString
}

module.exports = getCategoriesString
