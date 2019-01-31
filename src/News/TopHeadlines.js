import React from 'react';
import { GetTopHeadlinesFromEspn } from './espn';
import Grid from '@material-ui/core/Grid';
import { TopHeadlineDisplay } from './TopHeadlineDisplay';

export class TopHeadlines extends React.Component {
    componentDidMount() {
        GetTopHeadlinesFromEspn()
        .then(response => response.json())
        .then(articles => {
            this.setData({
                articles: articles
            });
        });
    }

    render() {
        const renderedArticles = this.state.articles.map(article => {
            return (
                <Grid item>
                    <TopHeadlineDisplay title={article.title} author={article.author} />
                </Grid>
            )
        });
        
        if (this.state.articles) {
            return (
                <Grid container>
                    {renderedArticles}
                </Grid>
            )
        }
    }
}