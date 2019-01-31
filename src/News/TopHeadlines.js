import React from 'react';
import { GetTopHeadlinesFromEspn } from './espn';
import Grid from '@material-ui/core/Grid';
import { TopHeadlineDisplay } from './TopHeadlineDisplay';
import './topHeadlines.css';

export class TopHeadlines extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: null
        }
    }

    componentDidMount() {
        GetTopHeadlinesFromEspn()
        .then(response => response.json())
        .then(data => {
            this.setState({
                articles: data.articles
            });
        });
    }

    render() {
        if (this.state.articles) {
            const renderedArticles = this.state.articles.map(article => {
                return (
                    <Grid item xs={12} className="article-preview">
                        <TopHeadlineDisplay articleUrl={article.url} imageUrl={article.urlToImage} title={article.title} author={article.author} description={article.description} />
                    </Grid>
                )
            });
            return (
                <div>
                    <Grid container>
                        {renderedArticles}
                    </Grid>
                    <span>*Data provided from <a href="https://newsapi.org">News Api</a></span>
                </div>
            )
        } else {
            return <div>Loading</div>
        }
    }
}