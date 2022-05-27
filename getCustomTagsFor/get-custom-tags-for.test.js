const getCustomTagsFor = require("./get-custom-tags-for")

const config = {
    globalVariableName: 'globalVar',
    memberTagNames: [
        'loggedIn'
    ],
    memberTagLocalNames: [
        'member_loggedIn'
    ],
    pageTagNames: [
        'language',
        'country',
        'category',
        'subCategories',
        'vertical',
        'subVertical',
        'triVertical',
        'topList',
        'primarySubCategory',
        'equivalentPage'
    ],
    pageTagLocalNames: [
        'page_language',
        'page_country',
        'page_main_category',
        'page_sub_categories',
        'page_vertical',
        'page_sub_vertical',
        'page_tri_vertical',
        'page_has_toplist',
        'page_primary_sub_cattegory',
        'page_eqivalent_page'
    ],
    userTagNames: [
        'mobile',
        'tablet',
        'continent',
        'country',
        'state',
        'city'
    ],
    userTagLocalNames: [
        'user_mobile',
        'user_tablet',
        'user_continent',
        'user_country',
        'user_state',
        'user_city'
    ]
}

beforeEach(() => {
    window.globalVar = {
        member_loggedIn: true,

        page_has_toplist: false,
        page_main_category: 'Page main category',

        user_city: 'User city'
    }
})

test('get member tags values', () => {
    const memberTagValues = getCustomTagsFor('member', config)

    expect(memberTagValues.loggedIn).toBe(true)
})

test('get page tags value', () => {
    const pageTagValues = getCustomTagsFor('page', config)

    expect(pageTagValues.category).toBe('Page main category')
})

test('false values should be preserved', () => {
    const pageTagValues = getCustomTagsFor('page', config)

    expect(pageTagValues.topList).toBe(false)
})

test('get user tags value', () => {
    const userTagValues = getCustomTagsFor('user', config)

    expect(userTagValues.city).toBe('User city')
})

test('empty tag values should be null', () => {
    const userTagValues = getCustomTagsFor('user', config)

    expect(userTagValues.state).toBe(null)
})
