const newsApi = 'https://newsapi.org/v2'

export function GetTopHeadlinesFromEspn() {
    return fetch(`${newsApi}/top-headlines?sources=espn&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
}