const newsApi = 'https://newsapi.org/v2'

export function GetTopHeadlinesFromEspn(searchTerm) {
    let url = `${newsApi}/everything?domains=espn.com&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

    if (searchTerm) {
        url += `&q=${encodeURIComponent(searchTerm)}`
    }
    return fetch(url)
}