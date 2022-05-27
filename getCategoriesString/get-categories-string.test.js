const getCategoriesString = require("./get-categories-string")

const config = {
    category: 'mainCat',
    subCategories: ['subCat-1', 'subCat-2']
}

test('generates categories string', () => {
    const categoriesString = getCategoriesString(config)

    expect(categoriesString).toBe('Category:mainCat:::SubCategories:subCat-1,subCat-2')
})

test('generates categories string while ignoring empty values', () => {
    config.subCategories = ['subCat-1', '']
    const categoriesString = getCategoriesString(config)

    expect(categoriesString).toBe('Category:mainCat:::SubCategories:subCat-1')
})

test('generates categories string when subcategories is string', () => {
    config.subCategories = ''
    const categoriesString = getCategoriesString(config)

    expect(categoriesString).toBe('Category:mainCat')
})

test('generates categories string when subcategories is false', () => {
    config.subCategories = false
    const categoriesString = getCategoriesString(config)

    expect(categoriesString).toBe('Category:mainCat')
})

test('generates categories string when subcategories is undefined', () => {
    config.subCategories = undefined
    const categoriesString = getCategoriesString(config)

    expect(categoriesString).toBe('Category:mainCat')
})

test('returns default if nothing is given', () => {
    config.category = undefined
    config.subCategories = undefined
    const categoriesString = getCategoriesString(config)

    expect(categoriesString).toBe('Category:null')
})
