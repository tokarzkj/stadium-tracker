import React from 'react';
import Grid from '@material-ui/core/Grid';
import { TopHeadlineDisplay } from './TopHeadlineDisplay';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './topHeadlines.css';
import { GetTopHeadlinesFromEspn } from './espn';

export class TopHeadlines extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            articles: null
        }

        this.updateSearch = this.updateSearch.bind(this);
        this.getArticles = this.getArticles.bind(this);
    }

    componentDidMount() {
        this.getArticles();
    }

    getArticles() {
        GetTopHeadlinesFromEspn(this.state.searchTerm)
        .then(response => response.json())
        .then(data => {
            this.setState({
                articles: data.articles
            });
        });
    }

    updateSearch(event) {
        this.setState({
            searchTerm: event.target.value
        });
    }

    render() {
        if (this.state.articles) {
            const renderedArticles = this.state.articles.map(article => {
                return (
                    <Grid item xs={12} className="article-preview">
                        <TopHeadlineDisplay articleUrl={article.url} imageUrl={article.urlToImage} title={article.title} author={article.author} description={article.description} onClick={this.props.recentlyViewedArticles.bind(this, article)} />
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
                            <Grid item sm={4}></Grid>
                            <Grid item sm={4}>
                                <TextField
                                    id="standard-search"
                                    label="Search field"
                                    type="search"
                                    onChange={this.updateSearch}
                                    className='search-bar'
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item sm={1} className='centered'>
                                <Button variant='contained' onClick={this.getArticles}>Search</Button>
                            </Grid>
                        </Grid>
                        <Grid container>
                            {renderedArticles}
                        </Grid>
                        <span>*Data provided from <a href="https://newsapi.org">News Api</a></span>
                    </div>
                )
            }
        } else {
            return <div>Loading</div>
        }
    }
}