export const RecentlyViewedArticleActions = {
    ADD_RECENTLY_VIEWED_ARTICLE: 'ADD_RECENTLY_VIEWED_ARTICLE'
}


export function addRecentlyViewedArticle(article) {
    return {
        type: RecentlyViewedArticleActions.ADD_RECENTLY_VIEWED_ARTICLE,
        payload: article
    }
}