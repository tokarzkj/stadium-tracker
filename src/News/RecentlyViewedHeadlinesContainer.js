import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { TopHeadlineDisplay } from './TopHeadlineDisplay';

class RecentlyViewedHeadlinesContainer extends React.Component {
    render() {
        if (this.props.recentlyViewedArticles) {
            const renderedArticles = this.props.recentlyViewedArticles.map(article => {
                return (
                    <Grid key={article.url} item xs={12} className="article-preview">
                        <TopHeadlineDisplay articleUrl={article.url} imageUrl={article.urlToImage} title={article.title} author={article.author} description={article.description} />
                    </Grid>
                )
            });

            return (
                <Grid container>
                    {renderedArticles}
                </Grid>
            )
        } else {
            return (
                <p>It appears you haven't viewed any headlines recently!</p>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        recentlyViewedArticles: state.recentlyViewedArticles
    }
}

export default connect(
    mapStateToProps,
    null
)(RecentlyViewedHeadlinesContainer);