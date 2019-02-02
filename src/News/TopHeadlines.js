import React from 'react';
import Grid from '@material-ui/core/Grid';
import { TopHeadlineDisplay } from './TopHeadlineDisplay';
import './topHeadlines.css';

export class TopHeadlines extends React.Component {
    render() {
        if (this.props.articles) {
            const renderedArticles = this.props.articles.map(article => {
                return (
                    <Grid item xs={12} className="article-preview">
                        <TopHeadlineDisplay articleUrl={article.url} imageUrl={article.urlToImage} title={article.title} author={article.author} description={article.description} />
                    </Grid>
                )
            });
            if (renderedArticles.length === 0) {
                return (
                    <div className='center-search'>
                        <div>
                            Sorry it appears nothing was found! Try searching again!
                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                        <Grid container>
                            {renderedArticles}
                        </Grid>
                    </div>
                )
            }
        } else {
            return <div>Loading</div>
        }
    }
}