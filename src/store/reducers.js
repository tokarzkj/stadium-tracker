const initialState = {
    app: {}
}

export function rootReducer(state = initialState, {type, payload} = {}) {
    if (type === 'ADD_RECENTLY_VIEWED_ARTICLE') {
        const recentlyViewedArticles = addRecentlyViewedArticle(state.recentlyViewedArticles, payload);
        return Object.assign({}, state, {
            recentlyViewedArticles
        });
    }

    return state;
}

function addRecentlyViewedArticle(state = [], payload) {
    return [...state, payload];
}